export type iniState = {
  counter: number;
  name: string;
  message: string;
  contact: string;
};

export type Action =
  | { type: "UpdateField"; field: keyof iniState; value: string }
  | { type: "NextStep" }
  | { type: "Finish" };

export const initialState: iniState = {
  counter: 0,
  name: "",
  message: "",
  contact: ""
};

export const reducer = (state: iniState, action: Action): iniState => {
  switch (action.type) {
    case "UpdateField":
      return {
        ...state,
        [action.field]: action.value
      };
    case "NextStep":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "Finish":
      return {
        ...initialState
      };
    default:
      return state;
  }
};
