import { useState } from "react"
import { NavLink } from "react-router-dom"

const NavBar1 = () => {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(prev => !prev)
  }

  function closeNav() {
    setOpen(false)
  }

  return (
    <>
      <nav className="flex bg-gray-800 text-white p-4 gap-4 items-center justify-between">
        <h1 className="text-2xl">Assignments</h1>
        <button 
          className="text-3xl sm:hidden hover:bg-green-500 bg-blue-500 p-1"
          onClick={handleClick}
        >
          ☰
        </button>

        <div className="hidden sm:flex gap-5">
          <NavLink to="/ass1/awareness" onClick={closeNav}>Awareness</NavLink>
          <NavLink to="/ass1/application">Application</NavLink>
          <NavLink to="/ass1/mastery">Mastery</NavLink>
          <NavLink to="/ass1/influence">Influence</NavLink>
          <NavLink to="/ass1/learnings">Learnings</NavLink>
        </div>
      </nav>

      {open && (
        <nav className="absolute z-20 bg-black/80 text-white p-4 flex flex-col sm:hidden gap-4 top-16 left-0 w-full">
          <NavLink to="/ass1/awareness" onClick={closeNav}>Awareness</NavLink>
          <NavLink to="/ass1/application" onClick={closeNav}>Application</NavLink>
          <NavLink to="/ass1/mastery" onClick={closeNav}>Mastery</NavLink>
          <NavLink to="/ass1/influence" onClick={closeNav}>Influence</NavLink>
          <NavLink to="/ass1/learnings" onClick={closeNav}>Learnings</NavLink>
        </nav>
      )}
    </>
  )
}

export default NavBar1
