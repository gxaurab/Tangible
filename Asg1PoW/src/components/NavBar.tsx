import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-gray-800 sticky text-white p-4 flex gap-4">
        <NavLink to="/awareness">Awareness</NavLink>
        <NavLink to="/application">Application</NavLink>
        <NavLink to="/mastery">Mastery</NavLink>
        <NavLink to="/influence">Influence</NavLink>
        <NavLink to="/learnings">Learnings</NavLink>
    </nav>
  )
}

export default NavBar