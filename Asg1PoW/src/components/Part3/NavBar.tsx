import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <NavLink to="/ass3/awareness" className="hover:underline">Awareness</NavLink>
      <NavLink to="/ass3/application" className="hover:underline">Application</NavLink>
      <NavLink to="/ass3/mastery" className="hover:underline">Mastery</NavLink>
      <NavLink to="/ass3/influence" className="hover:underline">Influence</NavLink>
      <NavLink to="/ass3/learnings" className="hover:underline">Learnings</NavLink>
    </nav>
  )
}

export default NavBar