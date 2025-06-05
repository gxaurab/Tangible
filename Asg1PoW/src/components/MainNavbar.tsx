import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <Link to="/ass1/awareness">Assignment 1</Link>
      <Link to="/ass2/awareness">Assignment 2</Link>
      <Link to="/ass3/">Assignment 3</Link>
      <Link to="/ass4/">Assignment 4</Link>
    </nav>
  );
};

export default MainNav;
