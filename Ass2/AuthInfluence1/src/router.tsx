import { createBrowserRouter } from "react-router";
import App from "./App";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ErrorPage } from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { RedirectIfAuthenticated } from "./components/RedirectIfAuthenticated";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
   {
    path: '/',
    Component: App,
    children: [
        {index: true, Component: Hero},
        {path: 'login', Component:()=>(
            <RedirectIfAuthenticated>
                <Login/>
            </RedirectIfAuthenticated>
        ) },
        {path: 'signup', Component: ()=>(
            <RedirectIfAuthenticated>
                <Signup/>
            </RedirectIfAuthenticated>
        )},
        {path: 'dashboard', Component: ()=> (
            <ProtectedRoutes allowedRoles={["Admin"]}>
                <Dashboard/>
            </ProtectedRoutes>
        )},
        {path:"contact", Component: Contact}
    ]
   },
   {path: "*", Component:ErrorPage}
])