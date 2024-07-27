import { SUBMIT_FORM } from "./formType";

const intialState = {
  name: "empty",
  age: 0,
};

// action destructored.. so directly call "type"
export const formReducer = (state = intialState, { type, name, age }) => {
  switch (type) {
    case SUBMIT_FORM:
      return {
        ...state,
        name, // name: name   == same keyword and value.. so just name (only javascript)
        age,
      };

    default:
      return state;
  }
};
