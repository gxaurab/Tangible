import useInput from "./hooks/useInput";

const Awareness5 = () => {

  const {value:email, handleChange:handleEmail} = useInput("")
  const {value:password, handleChange:handlePassword} = useInput("")

  return (
    <>
      <h1>Welcome to Awareness, Assignment 5</h1>

      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        You typed: <b>{email}</b>
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        You typed: <b>{password}</b>
      </form>
    </>
  );
};

export default Awareness5;
