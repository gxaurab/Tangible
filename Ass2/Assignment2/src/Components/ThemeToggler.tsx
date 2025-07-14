import { useContext } from "react"
import { ThemeContext, type themeContextType } from "../context/ThemeContext"


const ThemeToggler = () => {

    const {theme, changeTheme} = useContext<themeContextType>(ThemeContext)

    return (
    <div>
        <button
            onClick={changeTheme}
            className="text-xl bg-amber-400"
        >
            Switch to {theme === "light"?"dark":"Light"} Mode
        </button>
    </div>
  )
}

export default ThemeToggler