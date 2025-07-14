import { NavLink } from "react-router"
import useTheme from "../hooks/useTheme"
import useAuth from "../hooks/useAuth"

const Navbar = () => {

  const {theme} = useTheme()
  const {username, isLoggedIn, logout} = useAuth()

  return (
    <nav className={theme === "light"?"bg-amber-100 border text-black":"bg-black border text-yellow-300"}>
        <ul className="flex text-3xl justify-around p-4">
            <NavLink to="/"><ul>LOGO HERE</ul></NavLink>

            {isLoggedIn? (
              <>
                <p>Hello, {username}</p>
                <button onClick={logout}>Logout</button>
                <NavLink to="/dashboard"><ul>Dashboard</ul></NavLink>
              </>
            ):(
              <NavLink to="/login">Login</NavLink>
            )}
            <NavLink to="/"><ul>Home</ul></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar