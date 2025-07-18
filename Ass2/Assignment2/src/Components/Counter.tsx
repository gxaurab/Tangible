import { useCounter } from "../hooks/useCounter"
import useToggle from "../hooks/useToggle"
import Modal from "./Modal"

const Counter = () => {
  
    const {count, updateCount, Reset} = useCounter()
    const { value: showModal, toggle } = useToggle();


    return (
    <div className="flex gap-5 text-3xl flex-col min-h-screen justify-center items-center">

    <button 
        className="bg-red-200 p-3 hover:bg-green-300"
        onClick={updateCount}>
        Increment Count</button>
        <h1> Your count level is {count}</h1>

    <button 
        className="bg-red-500 p-3 hover:bg-green-300"
        onClick={Reset}
        > Reset</button>

        {showModal ?<Modal onClose={toggle}/>:    
            <button 
            className="bg-blue-500 hover:bg-green-500  p-3 "
            onClick={toggle}> Show Modal </button>
        }

    </div>
  )
}

export default Counter


