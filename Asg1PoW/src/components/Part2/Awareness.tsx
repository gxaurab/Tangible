
// Build a toggle button that switches its label between “ON” and “OFF” when clicked,
// updating state accordingly.

import { useState } from "react"
import lighton from '../../assets/pic_bulbon.gif'
import lightoff from '../../assets/pic_bulboff.gif'


const Awareness2 = () => {

  const [toggle, setToggle] = useState<boolean>(false)

  const handleClick:any=()=>{
    setToggle(!toggle)
  }

  return (
    <div className="flex flex-col items-center gap-10 mt-4">
      <h1 className="bg-amber-200"> Took this concept form the W3Schools <br/> Couldn't find other emojis to display this</h1>
      <img src={toggle?lighton:lightoff} className="h-30 w-30 " />
      <button className="bg-amber-100 text-2xl p-4 hover:bg-green-200" onClick={handleClick}>{toggle?" Turn On":"Turn Off"}</button>
    </div>
  )
}

export default Awareness2