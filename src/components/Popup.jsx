import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Popup({popUp,toastDetail}) {
  const [type,line] = toastDetail
     useEffect(()=>{
      if(popUp){
        toast[type](line)
       }
     },[popUp])

     return null
}
