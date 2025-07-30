import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
