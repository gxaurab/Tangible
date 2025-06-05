import { NavLink } from 'react-router-dom';

const Assignment2Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <NavLink to="/ass2/awareness" className="hover:underline">Awareness</NavLink>
      <NavLink to="/ass2/application" className="hover:underline">Application</NavLink>
      <NavLink to="/ass2/mastery" className="hover:underline">Mastery</NavLink>
      <NavLink to="/ass2/influence" className="hover:underline">Influence</NavLink>
      <NavLink to="/ass2/learnings" className="hover:underline">Learnings</NavLink>
    </nav>
  );
};

export default Assignment2Navbar;
