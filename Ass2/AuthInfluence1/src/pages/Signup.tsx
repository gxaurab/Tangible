import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../config/firebase";
import type { FormEvent } from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import {doc, setDoc} from 'firebase/firestore'

const Signup = () => {
  const navigate = useNavigate()
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const nameInput = useInput("");

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredentials= await createUserWithEmailAndPassword(
        auth,
        emailInput.input,
        passwordInput.input,
      );
      
      const user = userCredentials.user;

      await updateProfile(user, {
        displayName: nameInput.input,
      });

      await setDoc(doc(db, "Users", user.uid), {
        Email:user.email,
        UID: user.uid,
        userRole: "User",
        name: nameInput.input
      })
      
      emailInput.setInput("")
      passwordInput.setInput("")
      nameInput.setInput("");
      navigate('/login')
    } catch (error: any) {
      console.log("Error occoured with code:", error.code);
    }
  };

  return (
<div className="bg-amber-50 flex justify-around p-5">
  <div>
    <h1 className="text-lg font-semibold mb-4">
      Are you new to this platform? <br /> Let's Sign Up
    </h1>

    <form onSubmit={registerUser} className="flex flex-col gap-2">
      <label>Email</label>
      <input
        className="border border-gray-300 p-2 rounded"
        name="email"
        type="email"
        value={emailInput.input}
        onChange={emailInput.handleChange}
        required
      />

      <label>Name</label>
      <input
        className="border border-gray-300 p-2 rounded"
        name="name"
        type="text"
        value={nameInput.input}
        onChange={nameInput.handleChange}
        required
      />

      <label>Password</label>
      <input
        className="border border-gray-300 p-2 rounded"
        name="password"
        type="password"
        value={passwordInput.input}
        onChange={passwordInput.handleChange}
        required
      />

      <button
        type="submit"
        className="border border-gray-400 bg-amber-800 text-white px-4 py-2 rounded w-fit mx-auto hover:bg-amber-700"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

  );
};

export default Signup;
