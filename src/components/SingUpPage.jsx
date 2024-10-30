import { useContext, useState } from "react"
import { FirebaseContext } from "../context/Firebase"
import Popup from "./Popup";

export default function SingUpPage({setLoginOrSingUp}) {

    const {userSingUp,storeUserData} = useContext(FirebaseContext)
    const [userInfo,setUserInfo] = useState({name: '',email: '',password: ''})
    const [isOrderPlaced, setIsOrderPlaced] = useState(false); 
    const [isOrderError,setIsOrderError] = useState(false)

    const handleSubmit = async(e)=>{
       e.preventDefault()

       setIsOrderPlaced(false)// reset
       setIsOrderError(false)// reset

    if(userInfo.name != '' && userInfo.email != '' && userInfo.password != '')
    {
       const result = await userSingUp(userInfo) //call singUp function

       if(result.success){    // sing up success
        storeUserData(userInfo)
        setIsOrderPlaced(true)
        setTimeout(()=>{
            setLoginOrSingUp(true)
        },0)
       }else{   // sing up error
        setIsOrderPlaced(true)
        setIsOrderError(true)
       }
    }
}
  return (
    <>
        <Popup popUp={isOrderPlaced} toastDetail={isOrderError ? ['error','Already account is created'] : ['success','Sign up successful']} />

        <div className={`animate-popup sm:w-[440px] bg-[#18181b] p-10 rounded-xl z-10`} onClick={(e)=> e.stopPropagation()}>
        <form action="" onSubmit={handleSubmit}>
            <h1 className="my-6 text-2xl font-bold">Sign Up</h1>

            <div className="flex flex-col gap-2">

               <label className="text-xl" htmlFor="">Name</label>
               <input className="bg-transparent focus:bg-[#18181b] border-b focus:outline-none text-[#FF9800] font-semibold" required type="text" name="name" onChange={(e)=> setUserInfo((prv)=>({...prv,[e.target.name]: e.target.value}))} />

                <label className="text-xl" htmlFor="">Email</label>
                <input className="bg-transparent border-b focus:outline-none text-[#FF9800] font-semibold" required type="email" name="email" onChange={(e)=> setUserInfo((prv)=>({...prv,[e.target.name]: e.target.value}))} />

                <label className="text-xl" htmlFor="">Password</label>
                <input className="bg-transparent border-b focus:outline-none text-[#FF9800] font-semibold" required type="password" name="password" onChange={(e)=> setUserInfo((prv)=>({...prv,[e.target.name]: e.target.value}))} />

                <button className="bg-[#FF9800] my-4 py-2 rounded-lg font-semibold" onSubmit={handleSubmit}>Sign Up</button>

                <p className="text-center">Already have account? <span className="text-[#F8230E] cursor-pointer" onClick={()=>setLoginOrSingUp(true)}>Login</span></p>
            </div>
        </form>
        </div>
        </>
  )
}
