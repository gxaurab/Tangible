import useLogout from "../hooks/useLogout";
import { useUser } from "../store/authUser";

const Dashboard = () => {
  const username = useUser((state) => state.name);
  const logoutUser = useLogout();

  return (
    <div>
      <h1>Welcome back {username}</h1>
      <button onClick={logoutUser}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
