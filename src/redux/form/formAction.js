import { SUBMIT_FORM } from "./formType";

export const submitForm = ({ name, age }) => {
  return {
    type: SUBMIT_FORM,
    name, // name: name   == same keyword and value.. so just name (only javascript)
    age,
  };
};
