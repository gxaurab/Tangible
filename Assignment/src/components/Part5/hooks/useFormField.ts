
import { useState } from "react"

type rules = {
    required: boolean
    minLength?: number
    maxLength?: number
    email?: string
}


const useFormField = (defaultValue: string | "", validationRules:rules) => {

    const [input, setInput] = useState(defaultValue)
    const [touch, setTouch] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const validate=(data:string)=>{

        if(validationRules.required && !data){
            return "It is Required"
        }

        if(validationRules.minLength && data.length < validationRules.minLength){
            return `Minimum required characters of ${validationRules.minLength}`
        }
        
        if(validationRules.maxLength && data.length > validationRules.maxLength){
            return `Max allowed length is ${validationRules.maxLength}`
        }

        if(validationRules.email && !data.includes('@')){
            return `You must inlude ${validationRules.email}`
        }

        return null;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value
        setInput(newValue)
        if(touch){
            setError(validate(newValue))
        }
    }

    const onFocus =()=>{
        setTouch(true)
        setError(validate(input))
    }

    const reset=()=>{
        setInput(defaultValue)
        setTouch(false)
        setError(null)
    }

    return{
        value:input, touch, setTouch, error, setError,
        handleChange, reset, onFocus
    }

}

export default useFormField























