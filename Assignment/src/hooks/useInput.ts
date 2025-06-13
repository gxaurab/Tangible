import { useState } from "react"

const useInput = (val = "") => {

    const [input, setInput] = useState(val)
     
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value)
    }

    function reset(){
        setInput(val)
    }

    return {input, onChange:handleChange, reset }
}

export default useInput