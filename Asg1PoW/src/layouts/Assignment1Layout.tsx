import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Part1/NavBar";

const Assignment1Layout = () => {
  return (
    <>
      <Navbar1 />
      <Outlet />
    </>
  );
};

export default Assignment1Layout;
