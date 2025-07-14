import useTheme from "../hooks/useTheme"

const ToggleThemeButton = () => {

    const {theme, changeTheme} = useTheme()

  return (
    <button
        className= {theme === "light"? "bg-white text-black text-2xl p-4":"text-white bg-black text-2xl p-4"}
        onClick={changeTheme}
    >Change to {theme === "light"?"dark":"light"}</button>
  )
}

export default ToggleThemeButton

