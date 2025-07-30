import React, { useReducer, type ChangeEvent, type FormEvent } from "react";


type State = {
  step: number;
  name: string;
  message: string;
  contact: string;
};

type Action =
  | { type: "UPDATE_FIELD"; field: keyof State; value: string }
  | { type: "NEXT_STEP" }
  | { type: "RESET" };

const initialState: State = {
  step: 0,
  name: "",
  message: "",
  contact: "",
};

function formReducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const StepForm: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name as keyof State,
      value: e.target.value,
    });
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "NEXT_STEP" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", state);
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={state.step === 2 ? handleSubmit : handleNext}>
      {state.step === 0 && (
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" value={state.name} onChange={handleChange} />
          <button type="submit">Next</button>
        </div>
      )}
      {state.step === 1 && (
        <div>
          <label htmlFor="message">Message:</label>
          <input name="message" value={state.message} onChange={handleChange} />
          <button type="submit">Next</button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <label htmlFor="contact">Contact:</label>
          <input name="contact" value={state.contact} onChange={handleChange} />
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default StepForm;