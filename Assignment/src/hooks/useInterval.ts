// Build a reusable custom hook to handle intervals or repeated side effects with proper cleanup.
// Create a useInterval hook that accepts a callback and delay, and use it to build the clock component or auto-refresh UI.

import { useEffect, useRef } from "react"


export const useInterval = (callback: () => void, delay: number):void => {

    const savedCallback = useRef<()=> void>(()=> {});

    useEffect(()=>{
        savedCallback.current = callback
    },[callback])

    useEffect(()=>{ 
        const intervalID =setInterval(savedCallback.current, delay)
        
        return ()=> { clearInterval(intervalID) }
        }
    , [])
}
