import Title from "./Title"

export default function Orders() {
    const orderDetail = JSON.parse(localStorage.getItem('order'))  
    return (
    <main className="min-h-screen bg-[#0c0c0c]">
    <div className="max-w-[1250px] m-auto pt-10 px-4 sm:px-10 text-white">
         {/* title */}
     <Title data={orderDetail} title={{default: 'No Orders Placed',active: 'Your Orders'}}/>

     <div className="py-8">
        <h1 className="text-xl">Total Orders : {orderDetail.length}</h1>

        <div className="pt-4 ">
        <table className="w-full text-left relative">
        <thead>
            <tr className="border-b">
                <th className="py-4 px-2 sm:p-4">Name</th>
                <th className="py-4 px-2 sm:p-4">Address</th>
                <th className="py-4 px-2 sm:p-4">Products</th>
                <th className="py-4 px-2 sm:p-4">Cost</th>		
                <th className="py-4 px-2 sm:p-4 hidden sm:block">Date</th>
            </tr>
        </thead>

        <tbody>
        {
           orderDetail.sort((a,b)=> b.id - a.id).map((e,i)=>(
            <tr className={i% 2 == 0 ? 'bg-[#181818]' : 'bg-transparent'} key={crypto.randomUUID()}>
                    <td className="py-4 px-2 sm:p-4">{e.name}</td>
                    <td className="py-4 px-2 sm:p-4">{e.address}</td>
                    <td className="py-4 px-2 sm:p-4">{e.product}</td>
                    <td className="py-4 px-2 sm:p-4">&#8377;{e.cost}</td>
                    <td className="py-4 px-2 sm:p-4 hidden sm:block">{e.currantTime}</td>
            </tr>
           ))
        }
        </tbody>
     </table>

        </div>
     </div>

    </div>
    </main>
  )
}
