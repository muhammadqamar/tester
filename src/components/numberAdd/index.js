import React from "react";
import { allTypes } from "../../store/types";
import { useSelector, useDispatch } from "react-redux";

const Index = () => {
  const numberAdded = useSelector((state) => state.numberReducer);
  const despach = useDispatch();

  return (
    <div>
      {" "}
      <h1>Counter App</h1>
      <div>
        <h4>Number:{numberAdded} </h4>
        <button
          onClick={() => {
            despach({ type: allTypes.NUMBER_INCREASE });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            despach({ type: allTypes.NUMBER_DECRES });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Index;
