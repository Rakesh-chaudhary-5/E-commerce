
export default function Title({data,title}) {
  return (
       <div className="text-4xl font-semibold border-b-2 text-white pb-6 border-[#FF9800]">
       <p>{data.subTotal || data.length  ? title.active : title.default}</p>
       </div>  )
}
