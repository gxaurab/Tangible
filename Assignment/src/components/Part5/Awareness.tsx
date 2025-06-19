import useInput from "./hooks/useInput";

const Awareness5 = () => {

  const {value:email, handleChange:handleEmail} = useInput("")
  const {value:password, handleChange:handlePassword} = useInput("")

  return (
    <>
      <h1 className="text-xl flex justify-center p-4">Welcome to Awareness, Assignment 5</h1>
      <div className="flex justify-center m-2">
        <form className="bg-amber-100 rounded-md shadow-md p-2 text-2xl w-md flex flex-col justify-center items-center">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
          className="border-1"
        />
        {email && <p className="text-[15px] text-green-500"> You typed: "{email}"</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
          className="border-1"
        />
        {password && <p className="text-[15px] text-green-500"> You typed: {password}</p>}
        </form>
      </div>
    </>
  );
};

export default Awareness5;
