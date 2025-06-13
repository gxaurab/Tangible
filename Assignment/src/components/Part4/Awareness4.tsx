// Understand useEffect runs after render and can be used for side effects like logging or simple updates.

import { useEffect } from "react";

// Log a message like “Component mounted” to the console when the component first renders.


export const Awareness4 = () => {
  
    useEffect(() => {
        console.log("Componenet had been mounted, and it;'s the first render, keep in mind that")
    }, []);
  
  
    return (
    <div>
        <h1 className="text-2xl text-center"> Hey, <br/> this is the Awareness4 component from the Assignment 4</h1>
    </div>
  )
}
