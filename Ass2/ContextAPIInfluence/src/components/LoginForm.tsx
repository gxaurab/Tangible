import { useState } from "react";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    login(username);
    setUsername(""); // optional: clear input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit" className="p-2 text-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
