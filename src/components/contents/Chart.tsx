import React from "react";
import type { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slice";

const Chart = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const buttonClickHandler = (e: any) => {
    if (e.target.name === "plus") dispatch(increment());
    else dispatch(decrement());
  };

  return (
    <div>
      <div>
        <button name="plus" onClick={buttonClickHandler}>
          Increment
        </button>
        <span>{count}</span>
        <button name="minus" onClick={buttonClickHandler}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Chart;
