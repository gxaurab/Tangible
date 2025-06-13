import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(prev => !prev);
  }

  function closeNav() {
    setOpen(false);
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

        <div className="hidden sm:flex gap-6">
          <NavLink to="/ass3/awareness" onClick={closeNav} className="hover:underline">Awareness</NavLink>
          <NavLink to="/ass3/application" onClick={closeNav} className="hover:underline">Application</NavLink>
          <NavLink to="/ass3/mastery" onClick={closeNav} className="hover:underline">Mastery</NavLink>
          <NavLink to="/ass3/influence" onClick={closeNav} className="hover:underline">Influence</NavLink>
          <NavLink to="/ass3/learnings" onClick={closeNav} className="hover:underline">Learnings</NavLink>
        </div>
      </nav>

      {open && (
        <nav className="absolute z-20 bg-black/80 text-white p-4 flex flex-col sm:hidden gap-4 top-16 left-0 w-full">
          <NavLink to="/ass3/awareness" onClick={closeNav} className="hover:underline">Awareness</NavLink>
          <NavLink to="/ass3/application" onClick={closeNav} className="hover:underline">Application</NavLink>
          <NavLink to="/ass3/mastery" onClick={closeNav} className="hover:underline">Mastery</NavLink>
          <NavLink to="/ass3/influence" onClick={closeNav} className="hover:underline">Influence</NavLink>
          <NavLink to="/ass3/learnings" onClick={closeNav} className="hover:underline">Learnings</NavLink>
        </nav>
      )}
    </>
  );
};

export default NavBar;
