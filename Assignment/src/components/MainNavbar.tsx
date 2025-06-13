import { Link } from "react-router-dom";

const MainNav = () => {

  


  return (
    <>
      <nav className=" hidden sm:flex gap-8 bg-black text-white p-4">
        <Link to="/ass1/awareness" className="hover:text-green-400">Assignment 1</Link>
        <Link to="/ass2/awareness" className="hover:text-green-400">Assignment 2</Link>
        <Link to="/ass3/awareness" className="hover:text-green-400">Assignment 3</Link>
        <Link to="/ass4/awareness" className="hover:text-green-400">Assignment 4</Link>
        <Link to='/ass5/awareness' className="hover:text-green-400"> Assignment 5</Link>
      </nav>
    </>
  );
};

export default MainNav;
