import { allTypes } from "../types";

export const inreaseNumber = () => {
  return {
    type: allTypes.NUMBER_INCREASE,
  };
};

export const decresNumber = () => {
  return {
    type: allTypes.NUMBER_DECRES,
  };
};
