import { useEffect, useState } from "react";

export const Mastery4 = () => {

const [time, setTime] = useState<string>(new Date().toLocaleTimeString("en-US", { hour12: true }));
const [date, setDate] = useState<string>(new Date().toLocaleDateString("en-US"))  

useEffect(() => {
  const time = setInterval(()=>{
    const d = new Date
    setTime(d.toLocaleTimeString("en-US",{ hour12: true }))
    setDate(d.toLocaleDateString())
  }, 1000)

  return ()=>{
    clearInterval(time)
  }
}, []);

  return (
    <div className="text-center gap-15 py-5 flex flex-col justify-center items-center  ">
      <h1 className="text-2xl "> Currento Timeo</h1>
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
        </div>
        <div className="text-xl m-2 text-red-600">{date}</div>
        <p className="animate-spin duration-[9000ms] ease-in"> Running out of time  </p>

      </div>
    </div>
  )
}
