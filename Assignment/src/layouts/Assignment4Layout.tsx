import { Outlet } from "react-router-dom"
import Navbar4 from "../components/Part4/Navbar4"


const Assignment4Layout = () => {
  return (
    <>
        <Navbar4/>
        <Outlet/>
    </>
  )
}

export default Assignment4Layout