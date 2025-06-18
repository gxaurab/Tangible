type Parameters = {
    name: string
    label?: string
    placeholder: string
    type: string
    value: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
    touch: boolean,
    onFocus: ()=>void,
    error:string |null
}

const Input:React.FC<Parameters> = ({
    name, 
    type, 
    placeholder,
    value,
    label,
    error,
    handleChange,
    onFocus,
    touch}) => {
  return (
        <>
        {label && <label htmlFor={name}>{label}</label>}
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                onBlur={onFocus}
                />
        {error && touch && <span className="text-red-500">{error}</span> }
        </>
    )
}

export default Input






















