import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../config/firebase"
import useInput from "../hooks/useInput"
import { useNavigate } from "react-router"
import { useUser } from "../store/authUser"
import { doc, getDoc } from "firebase/firestore"

const Login = () => {

  const navigate = useNavigate()
  const emailInput = useInput("")
  const passwordInput = useInput("")
  const {setRole, setName} = useUser((state)=> state)

  const signUserIn = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
        const result = await signInWithEmailAndPassword(auth, emailInput.input, passwordInput.input)
        console.log("UID is here--", result.user.uid)

        const UID = result.user.uid
        
        const docRef = doc(db, "Users", UID)
        const docSnap = await getDoc(docRef)
        console.log("Doc Snap is", docSnap.data())          

        if(docSnap.exists()){
          const userData = docSnap.data()

          setRole(userData.userRole)
          setName(userData.name)
        }

        emailInput.setInput("")
        passwordInput.setInput("")
        console.log(auth.currentUser)
        navigate("/")
    } catch (error: any) {
      console.log("Error with code:", error.code, error.message)
    }
  }

  return (
<div className="bg-amber-50 flex justify-around p-5">
  <div>
    <h1 className="text-lg font-semibold mb-4">Sign In</h1>

    <form onSubmit={signUserIn} className="flex flex-col gap-2">
      <label>Email</label>
      <input
        className="border border-gray-300 p-2 rounded"
        name="email"
        type="email"
        value={emailInput.input}
        onChange={emailInput.handleChange}
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
        className="border border-gray-400 bg-amber-800 text-white px-4 py-2 rounded w-fit mx-auto hover:bg-amber-700"
        type="submit"
      >
        Sign In
      </button>
    </form>
  </div>
</div>

  )
}

export default Login