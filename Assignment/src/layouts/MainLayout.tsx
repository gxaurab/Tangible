import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNavbar";

const MainLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default MainLayout;
