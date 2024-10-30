import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/Firebase";
import Popup from "./Popup";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({ productCount,setOpenMenu,isLoginSuccess,setIsLoginSuccess,popUp,isLogin,setIsLogin,setUserProfile,userProfile}) {
   const {userIsLogin} = useContext(FirebaseContext)
   const navigate = useNavigate()
   const [menuOpen,setMenuOpen] = useState(false)

   useEffect(()=>{
    if(!isLogin){
      navigate('/')
    }
   },[navigate,isLogin])

  useEffect(()=>{
    const checkUserIsLogin = async()=>{
      const result = await userIsLogin() //check user is Login
        setIsLogin(result.login)
        localStorage.setItem('isLogin',JSON.stringify(result.login))
     }
     checkUserIsLogin()
  },[userIsLogin,isLoginSuccess])

  useEffect(()=>{
    window.addEventListener('click',()=>{
       setMenuOpen(false)
    })
  },[])


  return (
    <header className="relative z-10 bg-[#201f1f]">
      <Popup popUp={popUp} toastDetail={["error", "Logout"]} />

      <section className="m-auto flex max-w-[1400px] items-center justify-between px-8 py-4 sm:px-16">

        <div className="flex items-center gap-4 text-white">
          <img className="w-10" src={Logo} alt="" />
          <i className="fa-solid fa-bars block text-xl md:hidden cursor-pointer" onClick={(e)=>{
            e.stopPropagation()
             setMenuOpen(true)
            }}></i>
        </div>

        <nav className="hidden md:block">
          <ul className="flex text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""}  cursor-pointer rounded-lg px-4 py-2 transition-all duration-200 lg:px-6`
              }
            >
              <li>
                <span>Home</span>
              </li>
            </NavLink>

            <NavLink
              to="/products"
              className={() =>
                `${location.pathname === "/products" || location.pathname === "/productDetail" ? "bg-[#F8230E]" : ""}  cursor-pointer rounded-lg px-4 py-2 transition-all duration-200 lg:px-6`
              }
            >
              <li>
                <span>Products</span>
              </li>
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""}  cursor-pointer rounded-lg px-4 py-2 lg:px-6`
              }
            >
              <li>
                <span>Cart</span>
              </li>
            </NavLink>

            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `${isActive ? "bg-[#F8230E]" : ""}  cursor-pointer rounded-lg px-4 py-2 lg:px-6`
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
                `${isActive ? "bg-[#F8230E]" : ""}  cursor-pointer rounded-lg px-4 py-2 lg:px-6`
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

       {!userProfile
       ? <HamburgerMenu isLogin={isLogin} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
       : null
       }

        <div className="flex items-center gap-8 text-white">
          <NavLink to={"/cart"} className="relative">
            <i className="fa-solid fa-cart-shopping cursor-pointer text-xl"></i>
            <div className="absolute -right-4 -top-1 rounded-full bg-[#FF9800] px-2 text-[11px] font-semibold">
              {productCount}
            </div>
          </NavLink>

          {
            isLogin
            ? <i className="fa-solid fa-user cursor-pointer text-xl" onClick={(e)=>{
               e.stopPropagation()
               setUserProfile(true)
              }}></i>

            : <button className="cursor-pointer rounded-lg bg-orange-600 w-20 py-1"
              onClick={(e)=>{
              e.stopPropagation()
              setIsLoginSuccess()
              setOpenMenu(true)
              }}>Login</button>
          }

        </div>
      </section>
    </header>
  );
}
