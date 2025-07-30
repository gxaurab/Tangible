import { useReducer } from "react";
import { initialState, reducer } from "../reducers/formReducer";

const PracticeUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", state);
    dispatch({ type: "Finish" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg space-y-6"
    >
      {state.counter === 0 && (
        <div className="flex flex-col gap-4">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "UpdateField",
                field: "name",
                value: e.target.value
              })
            }
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => dispatch({ type: "NextStep" })}
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      )}

      {state.counter === 1 && (
        <div className="flex flex-col gap-4">
          <label htmlFor="message" className="text-lg font-medium text-gray-700">
            Message:
          </label>
          <input
            type="text"
            value={state.message}
            onChange={(e) =>
              dispatch({
                type: "UpdateField",
                field: "message",
                value: e.target.value
              })
            }
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => dispatch({ type: "NextStep" })}
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      )}

      {state.counter === 2 && (
        <div className="flex flex-col gap-4">
          <label htmlFor="contact" className="text-lg font-medium text-gray-700">
            Contact:
          </label>
          <input
            type="text"
            value={state.contact}
            onChange={(e) =>
              dispatch({
                type: "UpdateField",
                field: "contact",
                value: e.target.value
              })
            }
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default PracticeUseReducer;
