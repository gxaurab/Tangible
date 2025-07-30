import { useReducer, useEffect } from "react";

type TimerState= {
    seconds: number
    isRunning: boolean
}

type Action =
  | { type: "START" }
  | { type: "PAUSE" }
  | { type: "RESET" }
  | { type: "TICK" };

const initialState: TimerState = {
    seconds: 0,
    isRunning: false
}

function timerReducer(state: TimerState, action: Action): TimerState{
    switch(action.type){
        case "START":
            return { ...state, isRunning: true}
        case "PAUSE":
            return {...state, isRunning: false}
        case "RESET":
            return {seconds: 0, isRunning: false}
        case "TICK":
            return { ...state, seconds: state.seconds + 1 };
        default:
            return state;
    }
}

function useTimer(){
    
    const [state, dispatch] = useReducer(timerReducer, initialState)

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (state.isRunning) {
        interval = setInterval(() => {
            dispatch({ type: "TICK" });
        }, 1000);
        }

        return () => clearInterval(interval); 
    }, [state.isRunning]);



  return {
    seconds: state.seconds,
    isRunning: state.isRunning,
    start: () => dispatch({ type: "START" }),
    pause: () => dispatch({ type: "PAUSE" }),
    reset: () => dispatch({ type: "RESET" }),
  };
}

export default useTimer;