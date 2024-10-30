import CartProduct from "./CartProduct"
import { useEffect, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import OrderMenu from "./OrderMenu"
import Title from "./Title"

export default function Cart() {

    const [data,setData] = useState({})
    const [cartProduct,setCartProduct] = useOutletContext(); //useOutlet context
    const navigate = useNavigate()
   
    const placeOrder = ()=>{
      if(cartProduct.length >0){
        navigate('/checkout')
      }
    }

    useEffect(()=>{
      localStorage.setItem('amountDetails',JSON.stringify({subTotal: data.subTotal,tax: data.tax,total: data.total}))
    },[data])
    
  return (
   <main className="bg-[#0c0c0c] min-h-screen">
   <div className="max-w-[1250px] m-auto px-10 text-white pt-10">
 
    {/* title */}
   <Title data={data} title={{default: 'Your cart is empty',active: 'Shopping Cart'}}/>

   {/* product detail & order detail container */}
   <div className="flex flex-col lg:flex-row gap-10 pt-10 py-20">

     {/* product detail */}
    <CartProduct setData={setData} cartProduct={cartProduct} setCartProduct={setCartProduct}/>
 
    {/* order menu */}
    <OrderMenu data={data} placeOrder={placeOrder} btn={'Proceed To Checkout'}/>

  </div>
 </div>
</main>
  )
}
