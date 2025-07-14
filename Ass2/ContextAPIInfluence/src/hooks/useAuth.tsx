import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

    console.log("This is the user context ", context)


  return context;
};

export default useAuth;  
