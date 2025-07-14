import { createContext, useState, type ReactNode } from "react";

type AuthContextType = {
    username: string | null
    isLoggedIn: boolean
    login: (username: string) => void
    logout: ()=> void    
};


export const AuthContext = createContext<AuthContextType | undefined>(undefined)


export const AuthProvider = ({children}: {children: ReactNode})=>{
    const [auth, setAuth] = useState({
        username: null as string | null,
        isLoggedIn: false
    })

    const login =(username: string)=>{
        setAuth({
            username, isLoggedIn: true
        })
    }

    const logout = () => {
        setAuth({
        username: null,
        isLoggedIn: false,
        });
    };


    return (
        <AuthContext.Provider 
            value={{
                username: auth.username,
                isLoggedIn: auth.isLoggedIn,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )

}




