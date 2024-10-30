import { useContext, useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import SingUpPage from "./SingUpPage";
import Header from "./Header";
import UserProfile from "./UserProfile";
import { FirebaseContext } from "../context/Firebase";

export default function LoginAndSignUp({productCount}) {
  const userIsLoginOrLogOut = JSON.parse(localStorage.getItem('isLogin'))
  const userDetail = JSON.parse(localStorage.getItem('userDetail')) || {name: '',email: ''}


  const [loginOrSingUp, setLoginOrSingUp] = useState(true);
  const [openMenu,setOpenMenu] = useState(false)
  const {userLogout,getUserData,storeProductsInLocalStorage} = useContext(FirebaseContext)
  const [isLoginSuccess,setIsLoginSuccess] = useState(false) // user is successful to login

  const [popUp, setPopUp] = useState(false)
  const [isLogin, setIsLogin] = useState(userIsLoginOrLogOut || false)
  const [userProfile,setUserProfile] = useState(false)
  const [userData,setUserData] = useState(userDetail)

  // open login and singUp menu
  useEffect(()=>{
    window.addEventListener('click',()=>{
    setOpenMenu(false)
     })
  },[openMenu])

  const handleClick = (e)=>{
    e.stopPropagation()
     userLogout(); // log out user
     setIsLogin(false)
     localStorage.setItem('order',JSON.stringify([]))
     localStorage.setItem('userDetail',JSON.stringify({}))
     localStorage.setItem('amountDetails',JSON.stringify([]))
     localStorage.setItem('cartProduct',JSON.stringify(false))
     localStorage.setItem('isLogin',JSON.stringify(false))
     setPopUp(true)
     setUserProfile(false)
 }

  // get user data 
  const gatData = async(userInfo)=>{
  const data = await getUserData(userInfo) 
  data.map((e)=>{
    const {name,email} = e.data()
    setUserData((prv)=>({...prv,name: name,email: email}))
    localStorage.setItem('userDetail',JSON.stringify({name: name, email: email,path: e.id}))
    storeProductsInLocalStorage()
  })
  }

  useEffect(()=>{
     window.addEventListener('click',()=>{
      setUserProfile(false)
     })
  },[])
  if(openMenu){
    document.body.classList.add('overflow-y-hidden');
  }else{
    document.body.classList.remove('overflow-y-hidden');
  }
  console.log(loginOrSingUp);
 
  return(
    <>
        <Header productCount={productCount} setOpenMenu={setOpenMenu} isLoginSuccess={isLoginSuccess} setIsLoginSuccess={setIsLoginSuccess} popUp={popUp} isLogin={isLogin} setIsLogin={setIsLogin} setUserProfile={setUserProfile} userProfile={userProfile}/>
      
      
        {openMenu

        ? <main className={`absolute top-0 flex h-full w-full items-center justify-center  text-white `}>
          {/* background shadow */}
          <div className={`${openMenu ? 'scale-100':''} scale-0  transition-all duration-0 bg-[#0f0f0fc3] h-full w-full absolute z-10`}></div>
        { 
        loginOrSingUp
              ? <LoginPage setLoginOrSingUp={setLoginOrSingUp} openMenu={openMenu} setOpenMenu={setOpenMenu} isLoginSuccess={isLoginSuccess} setIsLoginSuccess={setIsLoginSuccess} gatData={gatData}/>
              : <SingUpPage setLoginOrSingUp={setLoginOrSingUp} loginOrSingUp={loginOrSingUp} openMenu={openMenu} />
        }
        </main>
        : null
        }
      
        
      
        <UserProfile handleClick={handleClick} setUserProfile={setUserProfile} userData={userData} userProfile={userProfile}/>

    </>
  )
}
