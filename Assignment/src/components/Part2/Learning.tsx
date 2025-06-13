const Learning2 = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      {/* Awareness Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Awareness</h1>
        <p>
          <span className="font-semibold">Rubric:</span> Use React’s <code>useState</code> hook to manage simple state,
          and handle basic events like button clicks. <br />
          <span className="font-semibold">Proof of Work:</span> Build a toggle button that switches its label between “ON” and “OFF” when clicked,
          updating state accordingly.
        </p>
        <div className="text-gray-700">
          <p>
            I remembered the W3Schools JavaScript tutorial I followed during my +2 days.
            I tried to mimic the same concept using React's <code>useState</code>. I downloaded the same image from the
            W3Schools tutorial and implemented it on my own.
          </p>
          <p>
            My learning from this is: <code>useState</code> is one of the most fundamental concepts in React used to manage
            different states of an application. Think of state as what a component or element is currently doing or displaying.
          </p>
        </div>
      </section>

      {/* Application Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Application</h1>
        <p>
          <span className="font-semibold">Rubric:</span> Manage multiple state variables and update UI based on user input or events. <br />
          <span className="font-semibold">Proof of Work:</span> Create a search box that filters a hardcoded list of items as the user types.
        </p>
        <p>
          I unknowingly spent a lot of hours on this assignment because at first, I wasn’t sure what was actually expected.
          Eventually, I figured it out and managed multiple dynamic states while heavily relying on JavaScript logic.
          I used a hardcoded list of all US cities and implemented a search functionality that filters the list as the user types.
        </p>
      </section>

      {/* Mastery Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Mastery</h1>
        <p>
          <span className="font-semibold">Rubric:</span> Coordinate several pieces of state together and handle complex input flows like opening/closing modals. <br />
          <span className="font-semibold">Proof of Work:</span> Build a modal component that can be opened and closed, with form inputs inside whose values are managed with state.
        </p>
        <p>
          I learned what a modal component is by watching YouTube tutorials and reading blog posts. Although I didn’t focus
          much on visual styling, I implemented the key behaviors: opening a modal on a button click, closing it via a button
          or clicking outside the modal. Tailwind's <code>inset</code> utility was especially useful for positioning the modal properly.
        </p>
      </section>

      {/* Influence Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Influence</h1>
        <p>
          <span className="font-semibold">Rubric:</span> Create a useInput custom hook that manages input value and onChange logic, then use it in multiple inputs. <br />
          <span className="font-semibold">Proof of Work:</span> Created a custom hook named <code>useInput</code> to manage input fields efficiently.
        </p>
        <p>
          This was by far the most productive assignment for me. “Custom hook” used to sound like a big scary concept,
          but now I understand it. I built a <code>useInput</code> hook to abstract away input logic and reuse it across components.
          I learned that custom hooks are reusable functions that encapsulate logic using built-in React hooks like <code>useState</code>,
          and help clean up repetitive code.
        </p>
      </section>
    </div>
  );
};

export default Learning2;
