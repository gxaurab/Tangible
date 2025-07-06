import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import App from "./App";



export const routes =
    createBrowserRouter([
        {
            path: "/",
            Component: App,
            children: [
                {index: true, Component: Home},
                {path: "login", Component: Login},
                {path: "register", Component: Register}
            ]
        }
    ])
