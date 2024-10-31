import { useEffect, useState } from "react"
import { Link, useLocation, useOutletContext } from "react-router-dom"
import Popup from "./Popup"

export default function ProductDetail() {
  const amountDetails = JSON.parse(localStorage.getItem('amountDetails'))

  const [cartProduct,setCartProduct] = useOutletContext(); //useOutlet context

  const [data,setData] = useState(amountDetails)
  const [bgBox,setBgBox] = useState(0)
  const [amount,setAmount] = useState(1)
  const [popUp,setPopUp] = useState(false)

  const amountBoxs = [1,2,5,10]
  const ProductsData = useLocation()
  const Product = ProductsData.state

  const amountBox = (i,e)=>{
     setBgBox(i)
     setAmount(e)
  }

  // add Product in cart 
  const addCart = (e)=>{
    e.stopPropagation()
    setCartProduct((prv)=>{
      const existingProduct = prv.find((e)=> e.id===Product.id)
      if(existingProduct){
       return prv.map((el)=>
         el.id === Product.id ? {...el ,amount: el.amount+amount} : el
        )
      }else{
        return [...prv,{...Product,amount: amount}]
      }
    })
    setPopUp(true)
  }

  useEffect(()=>{
    function calculate(){

  const subTotal = cartProduct.reduce((acc,e)=> acc+e.price*e.amount,0)

  const tax = cartProduct.reduce((acc,e)=> acc+e.tax*e.amount,0)  // calculating tax

  const total = cartProduct.reduce((acc,e)=> acc+(e.price*e.amount)+(e.tax*e.amount)+(e.price*e.amount <=1500 & e.price!=0 ? 100 : 0),0) // calculating total
      

      const newAmountDetails = { subTotal, tax, total };
      setData(newAmountDetails);
      localStorage.setItem('amountDetails', JSON.stringify(newAmountDetails));
      }  

     if(cartProduct.length > 0){
      calculate()
     }
  },[cartProduct])
   
  useEffect(()=>{
    localStorage.setItem('cartProduct',JSON.stringify(cartProduct)) // save cartProduct 
    setPopUp(false)
  },[cartProduct])

  return (
   <>
          {/* pop up */}
    <Popup popUp={popUp} toastDetail={['success','Item Added to Cart']}/>
        
    <main className="bg-[#0c0c0c] min-h-screen " onClick={()=> setPopUp(false)}>

      <div className="text-white p-6 max-w-[1400px] px-6 pb-28  m-auto pt-20 sm:px-10">
      
      <div className="flex gap-2 ">
        <Link to={'/'}><p className="hover:underline font-semibold cursor-pointer">Home</p></Link>
        <p>{`>`}</p>
        <Link to={'../products'}><p className="hover:underline font-semibold cursor-pointer">Products</p></Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-between mt-10">
    {/* img */}
      <div className="max-w-[600px]">
        <img  draggable={'false'} className="rounded-xl" src={Product.img} alt="" />
      </div>

    {/* detail */}
      <div className="max-w-[600px] flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{Product.name}</h1>
      <p className='text-[#7D7C7C] font-semibold text-lg'><span className='text-[#FFA500] font-bold'>&#8377;</span>{Product.price} kg</p>
      <p className="text-[#a5a5a5] leading-8 max-w-[500px]">{Product.description}</p>
    
    <label htmlFor="" className="font-semibold text-xl">Amount</label>
      
      <ul className="flex gap-4">
        {  
         amountBoxs.map((e,i)=>(
         <li value={e} key={crypto.randomUUID()} className={`${bgBox === i ? 'bg-[#FF9800] border-[#FF9800]':''} border cursor-pointer w-16 text-center rounded-md px-2 py-1`} onClick={()=>amountBox(i,e)}>{e}kg</li>
         ))
        }
      </ul>

      <button className="bg-[#FF9800] w-28 py-2 rounded-lg font-semibold mt-4" onClick={addCart}>Add to Cart</button>

       </div>
      </div>
     </div>
    </main>
   </>
  )
}