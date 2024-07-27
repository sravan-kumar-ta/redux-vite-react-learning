import React from "react";
import { useSelector } from "react-redux";

function ShowForm() {
  // const name = useSelector((state) => state.form.name);
  // const age = useSelector((state) => state.form.age);

  const { name, age } = useSelector((state) => state.form);
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}

export default ShowForm;
