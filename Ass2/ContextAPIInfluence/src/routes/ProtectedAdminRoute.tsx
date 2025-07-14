import { Navigate } from "react-router"
import  useAuth  from "../hooks/useAuth"
import type { ReactNode } from "react"

const ProtectedAdminRoute = ({children}: {children: ReactNode}) => {

    const {isLoggedIn} = useAuth()

    if(!isLoggedIn){
        return <Navigate to='/login' />
    }

    return <>{children}</>

}

export default ProtectedAdminRoute