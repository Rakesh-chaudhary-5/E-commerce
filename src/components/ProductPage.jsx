import { useState } from 'react';
import './ProductPage.css'
import Products from './Products';
import ProductData from './ProductData';

export default function ProductPage() {
  const [value, setValue] = useState(100); // Default slider value
  const [inputValue,setInputValue] = useState('') // Input value
  const [sortProduct,setSortProduct] = useState(() => (a, b) => 0)
  const [productName,setProductName] = useState('') // selected product name7
  const [price,setPrise] = useState(100) // bar prise
  const [nextBtn,setNextBtn] = useState(true) // next button
  const [productsIndex,setProductsIndex] = useState(0)

  const productLimit = 12

  const startIndex = productsIndex*productLimit
  const endIndex = productLimit+startIndex

       // Sorting data
     const filterProduct = ProductData.filter((e,i)=>{
      return e.name.toLowerCase().includes(inputValue.toLowerCase()) && e.price<=price*50 }) // search factuality
      .sort(sortProduct) // filter factuality
      .slice(startIndex,endIndex)

      //reset function
      const reset = ()=>{
        setProductName('')
        setSortProduct(()=>(a,b)=>0)
        setValue(100)
        setInputValue('')
      }

      // prise range
      const handleChange = (e) => {
      setValue(e.target.value);
      };

      const next =()=>{
        setNextBtn(false)
        setProductsIndex(1)
      }
      const prv = ()=>{
        setNextBtn(true)
        setProductsIndex(0)
      }

  return (
    <main className="bg-[#0c0c0c] pb-28  min-h-screen">
      <div className="p-10 max-w-[1400px] m-auto relative">

        {/* filter data container */}
        <div className="bg-[#181920] p-5 gap-6 text-white rounded-lg flex-wrap  flex justify-between px-5 sm:px-10">

          {/* search input*/}
          <div className="bg-[#0c0c0c] w-[400px] flex-grow flex overflow-hidden items-center text-white h-16 px-4 sm:px-10 rounded-lg">
            <input className="bg-inherit block text-[#FF9800] font-semibold outline-none h-full placeholder:text-white w-full" placeholder="Search Product" value={inputValue} type="text" onChange={(e)=> setInputValue(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

         <form action="" onSubmit={(e)=>{
             e.preventDefault()
             setPrise(value)
             if(productName === 'a-z'){
              return setSortProduct(()=> (a,b)=> a.name.localeCompare(b.name))
              }
               if(productName === 'z-a'){
              return setSortProduct(()=> (a,b)=> b.name.localeCompare(a.name))
              }
               if(productName === 'high'){
               return setSortProduct(()=> (a,b)=> b.price-a.price)
              }
               if(productName === 'low'){
               return setSortProduct(()=> (a,b)=> a.price-b.price)
              }
              else return ()=> (a,b)=> 0
         }}>
           {/* filter section */}
  <div className="bg-[#0c0c0c] flex gap-x-10 gap-y-6 flex-wrap mx:w-[600px] md:w-[600px] justify-between items-center py-2 px-6 rounded-lg">

{/* sort by */}
<div className="flex flex-col gap-2">
  <label htmlFor="">Sort by</label>
  <select className="bg-[#272935] cursor-pointer rounded-lg py-1 px-2 w-40 md:w-60" value={productName} onChange={(e)=> setProductName(e.target.value)}>
    <option value="" >select</option>
    <option value="a-z" >a-z</option>
    <option value="z-a">z-a</option>
    <option value="high">high</option>
    <option value="low">low</option>
  </select>
</div>

{/* prise range */}
<div className="flex flex-col gap-2 w-full sm:w-fit  bg-[#0c0c0c]">
  <div className='flex justify-between'>
    <label htmlFor="">Select Price</label>
  <p>&#8377;{value*50}</p>
  </div>
  <input type="range" min="0" max="100" value={value} onChange={handleChange}
    className="w-full md:w-[200px] h-4 rounded-lg appearance-none cursor-pointer"
    style={{ background: `linear-gradient(to right,#ff9800 ${value}%,#fff ${value}% 100%)`, }} />
</div>

{/* Button container */}
<div className='flex w-full gap-4 flex-wrap justify-center md:justify-between'>
  <button className='px-10 font-semibold py-2 bg-[#FF9800] rounded-lg' type='submit'>Search</button>
  <button className='px-10 font-semibold py-2 bg-[#FF7AC6] rounded-lg' onClick={reset}>Resat</button>
</div>
</div>
         </form>
        </div>
              
        {/* product style menu */}
        <div className='text-white text-lg font-semibold flex justify-between mt-20 py-4 border-b-2 border-[#FF9800]'>
          <p className=''>{filterProduct.length} products</p>
          <div className='flex gap-4 items-center'>
          <div className='flex bg-[#FF9800] w-9 h-9 justify-center items-center rounded-full'><svg stroke="currentColor" className='w-7 h-6 ' fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg></div>
          </div>
          </div>

        {/* products container */}
        <div className='text-white'>
          <Products allData={filterProduct} />
        </div>

       {/* next products */}
    
       <div className='text-white bg-[#181920] absolute cursor-pointer justify-center -bottom-10 right-10 rounded-lg flex'>
        <p className='py-2 px-4 hover:text-[#FF9800]' onClick={prv}>PREV</p>
        <p className={`${nextBtn ?'bg-[#FF9800]':''} py-2 px-3`}>1</p>
        <p className={`${!nextBtn ?'bg-[#FF9800]':''} py-2 px-3`}>2</p>
        <p className='py-2 px-4 hover:text-[#FF9800]'onClick={next} >NEXT</p>
       </div>

      </div>

      
    </main>
  )
}
