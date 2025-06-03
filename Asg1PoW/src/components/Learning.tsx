
const Learning = () => {
  return (
    <div className="bg-amber-100 flex flex-col gap-5 ">
        <section>
            <h1 className="font-bold"> About JSX & Functional Componenet</h1>
            <p> {`"JSX" is Javascript XML which is a way of writing HTML, CSS and JS. To return JSX we need to always wrap it with a element like <div> or react fragments <></>. To include CSS we use the className instead of class and to include javascript we write it inside of the {curly braces}`}</p>
            <p> Functional componenet is just another block of function that is reusable throughout our app and it can handle states, effects in our code. It can accepts props and return a React element</p>
        </section>
        <section>
          <h1 className="font-bold">About Props & Rendering</h1>
          <p>Props = properties which is basically an object that we pass from the higher order component to the lower level component and which is always a uni-directional. That means the children cannot manipulate or pass the props to componenets higher than it.</p>
          <p>Resuable components is the main advantage of using react</p>
        </section>
    </div>
  )
}

export default Learning