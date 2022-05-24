import { allTypes } from "../types";

const initialState = {
  list: [],
};

export const todoAppReducers = (state = initialState, action) => {
  switch (action.type) {
    case allTypes.ADD_INPUT_TEXT:
      return {
        ...state,

        list: [
          ...state.list,
          {
            id: Math.floor(Math.random() * 1000),
            title: action.payload,
          },
        ],
      };

    case allTypes.REMOVE_INPUT_TEXT:
      const deletList = state.list.filter((itm) => itm.id !== action.payload);
      return {
        ...state,
        list: deletList,
      };

    case allTypes.DELET_ALL_LIST:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
