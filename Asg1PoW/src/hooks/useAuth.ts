
import { useState } from "react"

const useAuth = (initial: boolean) => {
  const [auth, setAuth] = useState(initial)

  const authChange = () => setAuth(prev => !prev)

  return { auth, authChange }
}

export default useAuth
