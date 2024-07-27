import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementby5 } from "../redux/counter/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const count2 = useSelector((state) => state.count2);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <p>Count is:{count}</p>
      </div>

      {/* Counter 2 */}
      <div className="card">
        <button
          onClick={() => {
            dispatch(incrementby5(5));
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <p>Count is:{count2}</p>
      </div>
    </>
  );
};

export default Counter;
