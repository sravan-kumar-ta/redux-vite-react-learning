import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../redux/form/formAction";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => dispatch(submitForm({ name, age }))}>Submit</button>
    </>
  );
};

export default Form;
