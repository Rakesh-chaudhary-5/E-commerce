export default function OrderMenu({data,btn,placeOrder}) {
  return (
    <>
   {/* order detail */}
   <div className="text-center w-full lg:w-1/2">
   <div className="bg-[#121212]  py-4 px-6 text-white flex flex-col mb-8 gap-2 rounded-xl">
        
        <div className="flex justify-between border-b pb-1 border-[#7D7C7C]">
        <p>Subtotal</p>
        <p>&#8377;{data.subTotal}</p>
        </div>

        <div className="flex justify-between border-b pb-1 border-[#7D7C7C]">
        <p>Shipping</p>
        <p className={data.subTotal >1500 ? 'text-green-600' : ''}>&#8377;{data.subTotal !== 0 ? data.subTotal >1500 ? 'Free' : 100 : 0}</p>
        </div>

        <div className="flex justify-between border-b pb-1 border-[#7D7C7C]">
        <p>Tax</p>
        <p>&#8377;{data.tax}</p>
        </div>

        <div className="flex justify-between py-4 font-semibold">
        <p>Order Total</p>
        <p>&#8377;{data.total}</p>
        </div>
     </div>

     <button className="bg-[#FF9800] w-full p-2 rounded-md hover:bg-[#F8230E] transition-all duration-200" onClick={placeOrder}>{btn}</button>
   </div>
    </>
  )
}
