// Create reusable form input components and custom hooks to simplify validation and state.

import useFormField from "./hooks/useFormField"
import Input from "./Input"

// Build a useFormField hook to manage input value, touched state, and validation, then reuse it for multiple inputs.

const Influence5 = () => {

  const nameField = useFormField("",{
    required: true,
    minLength: 5,
    maxLength: 10
  })

  const emailField = useFormField("", {
    required: true,
    email:'@'
  })

  const messageField = useFormField("",{
    required: true,
    minLength: 10,
    maxLength: 150
  })

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const hasError = nameField.error || emailField.error || messageField.error

    if(hasError){
      console.log("form has errors, fix them")
      return
    }

    console.log("Form submitted with datas", {
      name: nameField.value,
      email: emailField.value,
      message: messageField.value,    
    })

    nameField.onFocus()
    emailField.onFocus()
    messageField.onFocus()

    nameField.reset()
    emailField.reset()
    messageField.reset()

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input 
          type={'text'} 
          placeholder={"eg: Jhon Doe"}
          name={'username'}
          {...nameField}
          />

        <Input
          name={'email'}
          type={"email"}
          placeholder={"jhondoe@gmail.com"}
          {...emailField}
          />

        <Input
          name={'messsage'}
          type={"text"}
          placeholder={"Type some message here"}
          {...messageField}
          />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Influence5