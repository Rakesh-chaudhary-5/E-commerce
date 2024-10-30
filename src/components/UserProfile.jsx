
export default function UserProfile({handleClick,setUserProfile,userData,userProfile}) {
  return (
    <div className={`${userProfile ? 'scale-100' : ''} scale-0 duration-300 ease-linear bg-[#151313] transition-all  max-w-60 sm:w-60 rounded-xl border-2 border-orange-600 absolute z-10 left-10 sm:right-10 sm:left-auto top-20 overflow-hidden text-white px-2`} onClick={(e)=> e.stopPropagation()}>
        <i className="fa-solid fa-xmark absolute right-2 text-xl cursor-pointer hover:text-red-600" onClick={()=> setUserProfile(false)}></i>
        <div className="text-center flex flex-col items-center py-6 ">

        <div className="border-2 w-10 h-10 p-1 rounded-full"><i className="fa-solid fa-user text-2xl"></i></div>
        <p className=" py-2"><span className="text-lg font-semibold">Name: </span>{userData.name}</p>
        <p className=""><span className="font-semibold text-lg">Email: </span>{userData.email}</p>

        <button className="cursor-pointer rounded-lg bg-orange-600 w-20 py-1 mt-4" onClick={handleClick}>Logout</button> 
        
        </div>
    </div> 
        )
}
