import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Aqib Nawaz",
      category: "developer",
    },
  ],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
