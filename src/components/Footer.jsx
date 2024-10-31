import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

export default function Footer() {
  return (
    <footer className=' bg-[#121212]'>
    <div className=' grid h-auto md:h-28 gap-x-10 gap-y-6 grid-cols-[100px_full] md:flex md:justify-between md:gap-8 items-center py-4 px-4 sm:px-10 lg:px-16 max-w-[1400px] m-auto'>
    
      <Link to={'/'}><img className='w-16 md:w-20 place-self-center cursor-pointer' src={Logo} alt="cart-logo" /></Link>

      <p className='text-white max-w-96 text-xl'><span className='text-orange-500 font-semibold '>Our vision</span> is to provide best Quality product and 
        make users <span className='text-orange-500 font-semibold '>best experience.</span></p>

      <div className='flex gap-6 col-span-2 justify-center'>
      <i className="fa-brands fa-instagram text-white text-2xl cursor-pointer hover:text-orange-500"></i>
      <i className="fa-brands fa-linkedin text-white text-2xl cursor-pointer hover:text-orange-500"></i>
      <i className="fa-brands fa-x-twitter text-white text-2xl cursor-pointer hover:text-orange-500"></i>
      <i className="fa-brands fa-facebook text-white text-2xl cursor-pointer hover:text-orange-500"></i>
      </div>
    </div>
  </footer> 
   )
}
