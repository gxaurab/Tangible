import { Outlet } from "react-router-dom"
import NavBar from "../components/Part3/NavBar"

const Assignment3Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default Assignment3Layout