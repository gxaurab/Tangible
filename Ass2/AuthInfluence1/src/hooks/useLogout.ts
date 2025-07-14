// src/hooks/useLogout.ts
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../config/firebase";
import { useUser } from "../store/authUser";

const useLogout = () => {
  const navigate = useNavigate();
  const logOut = useUser((state) => state.logOut);

  const logoutUser = async () => {
    try {
      await signOut(auth);
      logOut();
      localStorage.clear(); 
      navigate("/login");
    } catch (error: any) {
      console.log("Error during logout:", error.message);
    }
  };

  return logoutUser;
};

export default useLogout;
