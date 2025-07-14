import { createContext, useState, type ReactNode } from "react";

export interface themeContextType {
    theme: "light" | "dark"
    changeTheme: ()=> void
}


export const ThemeContext = createContext<themeContextType | undefined>(undefined)

export const ThemeProvider =({children}: {children: ReactNode})=>{

    const [theme, setTheme] = useState<"light"|"dark">("light")

    const changeTheme =()=>{
        setTheme((prev)=> prev === "light"?"dark":"light")
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}} >
            {children}
        </ThemeContext.Provider>
    )


}




