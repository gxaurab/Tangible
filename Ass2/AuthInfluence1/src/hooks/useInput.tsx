import { useState } from "react"

const useInput = (DefaultVal: string | "") => {
    
    const [input, setInput] = useState<string>(DefaultVal)

        const handleChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
            setInput(e.target.value)
    }

    return {input, handleChange, setInput}
}

export default useInput