import { useContext, useEffect, useState } from "react";
import Popup from "./Popup";
import { FirebaseContext } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage({setLoginOrSingUp,setOpenMenu,isLoginSuccess,setIsLoginSuccess,gatData,openMenu,loginOrSingUp}) {
  const {userLogin} = useContext(FirebaseContext)
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [isLoginError, setIsLoginError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
     
    setIsLoginSuccess(false) //reset
    setIsLoginError(false) //reset

    if(userInfo.email && userInfo.password ){

       const result = await userLogin(userInfo) // call Login

       if(result.success){
        gatData(userInfo)
        setIsLoginSuccess(true)
        setTimeout(()=>{
          setOpenMenu(false)
          navigate('/')
        },0)
      }else{
        setIsLoginError(true) 
        setIsLoginSuccess(true)
       }
    }
  } 

  return (
    <>
      <Popup popUp={isLoginSuccess} toastDetail={isLoginError? ["error", "Wrong email & password"]: ["success", "Login successful"]}/>

      <div className={`animate-popup w-[320px] sm:w-[440px] rounded-xl bg-[#18181b] p-10 z-10`} onClick={(e)=> e.stopPropagation()}>
        <form action="" onSubmit={handleSubmit}>
          <h1 className="my-6 text-2xl font-bold">Login</h1>

          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="">
              Email
            </label>
            <input
              className="border-b bg-transparent focus:outline-none"
              required
              type="email"
              name="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo((prv) => ({
                  ...prv,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <label className="text-xl" htmlFor="">
              Password
            </label>
            <input
              className="border-b bg-transparent focus:outline-none"
              required
              type="password"
              name="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((prv) => ({
                  ...prv,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <button
              className="my-4 rounded-lg bg-[#FF9800] py-2 font-semibold" onSubmit={handleSubmit}>
              Login
            </button>

            <p className="text-center">
              Don't have account?{" "}
              <span
                className="cursor-pointer text-[#F8230E]"
                onClick={() => setLoginOrSingUp(false)}
              >
                Create Now
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
