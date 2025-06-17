// Manage multiple form fields together and handle more complex validations.

// Build a contact form with fields like name, email, message, and validate each input with appropriate rules.

import { useState } from "react"
import {useForm, type SubmitHandler} from "react-hook-form"

type Inputs = {
  name: string
  email: string
  message: string
}

const Mastery5 = () => {

  const [messages, setMessages] = useState<Inputs[]>([]);
  const {register, handleSubmit, formState: {errors}, reset} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setMessages(prev => [...prev, data]);
    reset()
  };


  return (
    <>
    <h1> Welcome to the Validation logic implemented in this form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="eg. John Doe"
          {...register("name", {
            required: "Name is Mandatory"

          })}/>
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          placeholder="eg. john@gmail.com"
          {...register("email", {
            required: "Email is a must",
            pattern:{
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address"
            }
          })}/>
          {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <label htmlFor="message">Message</label>
        <input
          placeholder="eg. Inquiry on smthng"
          {...register("message",{
            required: "Please input some message",
            minLength: { value: 10, message: "Message should be minimum of 10 character"},
            maxLength: {value: 100, message: "Must not exceed 100 characters"}
          })}/>
        
        {errors.message && <p className="text-red-400">{errors.message.message}</p>}

        <button type="submit">Send</button>
      </form>

      <div>
        <h1> What you submitted</h1>
        {messages.map((message, index)=>(
          <div key={index}>
              <h1>{message.name}</h1>
              <h2>Email: _{message.email}</h2>
              <p>{message.message}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Mastery5 