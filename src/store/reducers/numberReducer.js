import { allTypes } from "../types";

const number = 0;

export const numberReducer = (state = number, action) => {
  switch (action.type) {
    case allTypes.NUMBER_INCREASE:
      return state + 1;

    case allTypes.NUMBER_DECRES:
      return state - 1;
    default:
      return state;
  }
};
