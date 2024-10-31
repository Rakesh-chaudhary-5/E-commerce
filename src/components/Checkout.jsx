import { useContext, useEffect, useState } from "react"
import OrderMenu from "./OrderMenu"
import Title from "./Title"
import { useOutletContext , useNavigate } from "react-router-dom"
import Popup from "./Popup";
import { FirebaseContext } from "../context/Firebase";

export default function Checkout() {
  const [cartProduct,setCartProduct] = useOutletContext(); //useOutlet context
  const data = JSON.parse(localStorage.getItem('amountDetails')) // checkout data
  const orderData = JSON.parse(localStorage.getItem('order')) || [] // order data
  const userDetails = JSON.parse(localStorage.getItem('userDetail'))
  const userIsLogin = JSON.parse(localStorage.getItem('isLogin'))


  const {storeProductData} = useContext(FirebaseContext)

  const [order,setOrder] = useState(orderData)
  const [userInfo,setUserInfo] = useState({name: '',address: ''})
  const [error,setError] = useState({name: true,address: true})
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const amount =  cartProduct.reduce((acc,el)=>{
    return acc+el.amount
  },0)
  
  // to get user currant date and time
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currantDate = new Date();
  let hours = currantDate.getHours(); // hours
  const minutes = String(currantDate.getMinutes()).padStart(2, '0'); // minutes
  const ampm = hours >= 12 ? 'PM' : 'AM'; 
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const month = months[currantDate.getMonth()]
  const date = currantDate.getDate()
  const year = currantDate.getFullYear()
  
  const formattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm} - ${month} ${date}th,${year}`;

  //  place order clicked
  const placeOrder = ()=>{      
    if(userInfo.name && userInfo.address && userIsLogin)
      {
       // set order detail in localStorage
        const newOrder = {
          id: order.length > 0 ? order.length + 1 : 1,
          name: userInfo.name,
          product: amount,
          address: userInfo.address,
          cost: data.total,
          currantTime: formattedTime,
        };
  
        // Update state and local storage
        setOrder((prev) => [...prev, newOrder]);
        localStorage.setItem('order', JSON.stringify([...order, newOrder]));
  
        // Save order to Firestore
        storeProductData([newOrder],userDetails.path);  // pass the updated order

        // reset
        setCartProduct([])
        localStorage.setItem('cartProduct',JSON.stringify([]))
        localStorage.setItem('amountDetails',JSON.stringify({"subTotal":0,"tax":0,"total":0}))
        // reset error
        setError((prv)=>({...prv,name: true ,address: true}))
        setUserInfo({name: '',address: ''})
        setTimeout(()=>{
        },0)
        
        setIsOrderPlaced(true)
    }
    else{
      if(!userIsLogin) setIsOrderPlaced(true)
      setError((prv)=>({...prv,name: userInfo.name ? true : false,address: userInfo.address ? true : false}))
    }
    return false
  }

  useEffect(()=>{
    localStorage.setItem('order',JSON.stringify(order)) //set order
  },[order])

  // Handle navigation after order is placed
  useEffect(() => {
    setIsOrderPlaced(false)

    if (isOrderPlaced & userIsLogin) {
      setTimeout(()=>{
        navigate('/orders');
      },0) // Only navigate after order is placed 
    }
  }, [isOrderPlaced, navigate]);

  return (
    <main className="bg-[#0c0c0c] min-h-screen">
    {
      userIsLogin 
      ? <Popup popUp={isOrderPlaced} toastDetail={['success','Order Placed']} />
      : <Popup popUp={isOrderPlaced} toastDetail={['warning','Login Required']} />

    }
    <div className="max-w-[1250px] m-auto px-4 sm:px-10 text-white pt-10">

    {/* title */}
    <Title data={data} title={{default: 'Your cart is empty',active: 'Place Your Order'}}/>

    {/* shipping detail & order detail container */}
   <div className="flex flex-col lg:flex-row gap-10 pt-10 py-20">

   <div className="text-white  font-semibold w-full lg:w-1/2">
   {
    data.total ?  
    <>
    <h1 className="text-2xl">Shipping information</h1>
    <div className="mt-10 flex flex-col gap-4 w-full">

    <label htmlFor="" className={error.name ? 'text-white' : 'text-red-600'}>{error.name ? 'First Name': 'First Name *Required'}</label>
    <input className="block py-4 w-full focus:outline-[#FF9800] outline outline-[#292929] bg-inherit rounded-lg pl-4" type="text" required value={userInfo.name} onChange={(e)=> setUserInfo((prv)=>({...prv,name: e.target.value}))} />

    <label htmlFor="" className={error.address ? 'text-white' : 'text-red-600'}>{error.address ? 'Address': 'Address *Required'}</label>
    <input className="block py-4 w-full focus:outline-[#FF9800] outline outline-[#292929] bg-inherit rounded-lg pl-4" type="text" required value={userInfo.address} onChange={(e)=> setUserInfo((prv)=>({...prv,address: e.target.value}))} />
    </div> 
    </>
   : null
   }
   </div>
     <OrderMenu data={data} placeOrder={placeOrder} btn={userIsLogin ? 'Place Your Order' : 'Login'} />
     </div>
    </div>
    </main>
   )
}

