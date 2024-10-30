import { NavLink } from "react-router-dom";

export default function HamburgerMenu({isLogin,setMenuOpen,menuOpen}) {
  return (
        <nav className={` ${menuOpen ? 'scale-100' : ''} scale-0 transition-all duration-300 absolute top-20 md:hidden bg-[#121212] border border-[#F8230E] w-60 rounded-lg overflow-hidden`} onClick={(e)=> e.stopPropagation()}>
          <ul className="flex flex-col text-white font-semibold">

          <i className="fa-regular fa-circle-xmark text-xl absolute right-4 top-2 cursor-pointer" title="close" onClick={(e)=> setMenuOpen(false)}></i>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""} cursor-pointer px-4 py-2 transition-all duration-200`
              }
            >
              <li>
                <span>Home</span>
              </li>
            </NavLink>

            <NavLink
              to="/products"
              className={() =>
                `${location.pathname === "/products" || location.pathname === "/productDetail" ? "bg-[#F8230E]" : ""} cursor-pointer px-4 py-2 transition-all duration-200`
              }
            >
              <li>
                <span>Products</span>
              </li>
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""} cursor-pointer px-4 py-2`
              }
            >
              <li>
                <span>Cart</span>
              </li>
            </NavLink>

            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""} cursor-pointer px-4 py-2`
              }
            >
              <li>
                <span>Checkout</span>
              </li>
            </NavLink>

          { isLogin ?
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""} cursor-pointer px-4 py-2`
              }
            >
              <li>
                <span>Orders</span>
              </li>
            </NavLink>
            : null
          }
          </ul>
        </nav>
  )
}
