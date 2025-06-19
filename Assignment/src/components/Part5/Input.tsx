type Parameters = {
    name: string
    label?: string
    placeholder: string
    type: string
    value: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
    touch: boolean,
    onFocus: ()=>void,
    error:string |null,
    isTextArea: boolean
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
    isTextArea,
    touch}) => {
  return (
    <>
    <div className="flex flex-col ">
        {label && 
        <label htmlFor={name} className="text-gray-700  font-medium">
            {label}
        </label>}
    {!isTextArea?(
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            onBlur={onFocus}
            className="p-1 border-1 border-gray-300 w-sm"
        />
    ) : (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            onBlur={onFocus}
            className="p-1 border-1 placeholder:text-sm placeholder:align-top h-20 border-gray-300 w-sm"
        />
    )}
        </div>
    {error && touch && <span className="text-red-500">{error}</span> }
    </>
    )
}

export default Input






















