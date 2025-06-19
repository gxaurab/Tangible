// Handle form submission events and validate required fields before allowing submit.

import {useForm, type SubmitHandler} from "react-hook-form"
// Add validation to the login form to show error messages if email or password fields are empty upon submission.

type FormValues  = {
  username: string
  password: string
}

export const Application5 = () => {

  const {register, handleSubmit,formState: {errors}, reset} = useForm<FormValues >()
    
  const submit:SubmitHandler<FormValues >=(data)=>{
    console.log(data)
    reset()
  }

  return (
    <div className="flex justify-center p-4">
      <form onSubmit={handleSubmit(submit)}
        className="flex flex-col  m-3 p-4 shadow-md bg-cyan-100 gap-2 w-md ">
        <label htmlFor="username" className="">Username:</label>
        <input 
          type="text"  
          className="border-b-1"
          {...register("username", 
            {required: "username is required", maxLength: { value: 8, message: "Maximum length of 8 including @ symbol"},
              validate: (value)=>{
                if(!value.includes('@')){
                  return "Username must have @"
                }
                return true;
              }
            }
          )}
          placeholder="Username max 6 char"
          />
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          placeholder="your Password"
          className="border-b-1 rounded-xls"
          {...register("password", {required: "Password is a must", minLength:{value: 8, message:"Min length of password is of 8 characters"}})}
          />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button  className="bg-blue-400 hover:bg-green-400" type="submit">Submit</button>


      </form>
    </div>
  )
}
