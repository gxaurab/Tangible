import { useState } from "react"

export interface CounterTypes {
    count: number
    updateCount: ()=> void
    Reset: ()=> void
}


export const useCounter = (): CounterTypes=>{

    const [count, setCount] = useState<number>(0)

    const updateCount =()=>{
        setCount((prev)=> prev +1)
    }

    const Reset =()=>{
        setCount(0)
    }

    return {
        count, updateCount, Reset
    }
    
}