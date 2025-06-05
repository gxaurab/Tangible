import { NavLink } from "react-router-dom"

const NavBar1 = () => {
  return (
    <nav className="bg-gray-800 sticky text-white p-4 flex gap-4">
        <NavLink to="/ass1/awareness">Awareness</NavLink>
        <NavLink to="/ass1/application">Application</NavLink>
        <NavLink to="/ass1/mastery">Mastery</NavLink>
        <NavLink to="/ass1/influence">Influence</NavLink>
        <NavLink to="/ass1/learnings">Learnings</NavLink>
    </nav>
  )
}

export default NavBar1