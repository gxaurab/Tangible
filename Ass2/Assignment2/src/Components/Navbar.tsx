import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" text-2xl flex bg-amber-100 justify-around">
        <NavLink to='/'><h1>LOGO HERE</h1></NavLink>
        <div className="flex gap-8">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
        </div>
    </div>
  )
}

export default Navbar