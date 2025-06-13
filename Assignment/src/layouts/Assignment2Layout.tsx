import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Part2/Navbar2";

const Assignment2Layout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
    </>
  );
};

export default Assignment2Layout;
