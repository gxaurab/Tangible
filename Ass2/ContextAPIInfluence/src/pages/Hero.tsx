import ToggleThemeButton from "../components/ToggleTheme"
import useTheme from "../hooks/useTheme"

const Hero = () => {

  const {theme} = useTheme()
  

  return (
    <>
        <ToggleThemeButton/>
    <div className="flex gap-4 justify-center ">
      <div className={theme === "dark"?"bg-black text-yellow-300 border w-full text-xl":"bg-white border w-full text-xl"}>
        <h1> This is me learning the Context API.<br/>
        Actually I found it little hard </h1>
        <section className="border-2 w-fit shadow-2xl m-4 p-3 text-xl hover:scale-105">
          <h1> Make this a card</h1>
          <p>It's a card</p>
        </section>
      </div>
      <div className={theme === "dark"?"bg-black text-yellow-300 border w-full text-xl":"bg-white border w-full text-xl"}>
        <p> Here is a button to make all this a funcitonal DARK WHITE mode</p>
                <section className="border-2 shadow-2xl w-fit m-4 p-3 text-xl hover:scale-105">
          <h1> Make this 2nd card</h1>
          <p>It's a card</p>
        </section>
      </div>
    </div>

    </>
  )
}

export default Hero