import { NavLink } from "react-router";
import { useUser } from "../store/authUser";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { name, role } = useUser((state) => state);
  const logoutUser = useLogout();

  const isLoggedIn = Boolean(name);
  const isAdmin = role === "Admin";

  return (
    <nav className="flex gap-5 bg-amber-200 justify-around py-4">
      <NavLink to="/">
        {isLoggedIn ? (
          <h1 className="hover:text-green-500 cusror-pointer ">Welcome, {name}.</h1>
        ) : (
          <h1 className="hover:text-green-500 cusror-pointer">Welcome, please login</h1>
        )}
      </NavLink>

      <NavLink className="hover:text-green-500" to="/">
        Home
      </NavLink>

      {!isLoggedIn && (
        <>
          <NavLink className="hover:text-green-500" to="/login">
            Login
          </NavLink>
          <NavLink className="hover:text-green-500" to="/signup">
            Register
          </NavLink>
        </>
      )}

      {isLoggedIn && isAdmin && (
        <NavLink className="hover:text-green-500" to="/dashboard">
          Admin Dashboard
        </NavLink>
      )}

      {isLoggedIn && (
        <button onClick={logoutUser} className="hover:text-red-500">
          Log Out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
