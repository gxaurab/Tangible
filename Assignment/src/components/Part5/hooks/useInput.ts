import { useState } from "react"

const useInput = (defaultValue: string | "") => {
    const [value, setValue] = useState(defaultValue)

    function handleChange(e:React.ChangeEvent<HTMLInputElement>):void{
        setValue(e.target.value)
    }

    return{value, handleChange}

}

export default useInput