import { Link } from "react-router-dom";

export default function Products({allData}) {
  return (
    <div className='mt-20 flex flex-wrap max-md:justify-center gap-20'>
    {
        allData.map((e)=>(
                // card
           <Link to={'../productDetail'} state={e} key={crypto.randomUUID()}>
            <div className='rounded-xl overflow-hidden mx-w-[300px] sm:w-[400px] md:w-[250px] bg-[#121212]' >
                {/* Images  */}
             <img className='m-auto rounded-xl' draggable='false' src={e.img} alt="dates" />
                {/* Details */}
              <div className='p-6 pt-2'>
                <h1 className='text-xl font-bold mb-1'>{e.name}</h1>
                <p className='text-[#7D7C7C] font-semibold text-lg'><span className='text-[#FFA500] font-bold'>&#8377;</span>{e.price} kg</p>
                <p className='text-[#a5a5a5]'>Best premium quality <span className='text-[#FFA500] font-semibold'>{e.name}</span> we are Providing.</p>
             </div>
            </div>
           </Link>
        ))
    }
    </div>
)}
