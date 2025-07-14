import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../pages/Hero";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true , Component: Hero },
            {path: "login", Component: Login},
            {path:'dashboard', 
                element: <ProtectedAdminRoute>
                    <Dashboard/>
                </ProtectedAdminRoute>}
        ]
    },
])