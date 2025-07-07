import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../auth/firebaseConfig'
import { useAuthStore } from './store/auth'

function App() {
  const { setUser, setLoading } = useAuthStore()

  useEffect(() => {
    setLoading(true); 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    setLoading(false)
    })
    return unsubscribe
  }, [setUser, setLoading])

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App