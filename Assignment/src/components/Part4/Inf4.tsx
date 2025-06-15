
import { useState } from "react"
import { useInterval } from "../../hooks/useInterval"

export const Inf4 = () => {

   const [time, setTime] = useState<string>(new Date().toLocaleTimeString("en-US", {hour12: true}))
   const [date, setDate] = useState<string>(new Date().toLocaleDateString("en-US")) 

     function callback(){
       const currentTime = new Date()
       setTime(currentTime.toLocaleTimeString("en-US", {hour12: true}))
       setDate(currentTime.toLocaleDateString('en-US'))
     }
   
     useInterval(callback, 1000);
   
     return (
       <div className="text-center gap-15 py-5 flex flex-col justify-center items-center  ">
         <h1 className="text-2xl "> Currento Timeo From Influence</h1>
         <div className="">
           <div
             className="
               text-5xl text-violet-700 font-semibold 
               animate-bounce
               transition-transform duration-500 ease-in-out 
               hover:scale-125
             "
           >
             {time}
            <div className="text-xl m-2 text-red-600">{date}</div>
           </div>
           <p className="animate-spin duration-[9000ms] ease-in"> Running out of time  </p>
         </div>
       </div>
     )
}
