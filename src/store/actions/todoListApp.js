import { allTypes } from "../types";
import { client } from "../../api/client";
export const addInputText = (title) => {
  return {
    type: allTypes.ADD_INPUT_TEXT,
    payload: title,
  };
};

export const removeInputText = (id) => {
  return {
    type: allTypes.REMOVE_INPUT_TEXT,
    payload: id,
  };
};

export const deletAllList = () => {
  return {
    type: allTypes.DELET_ALL_LIST,
  };
};

export async function fetchTodos(dispatch, getState) {
  // dispatch(todosloading());
  const response = await client.get("/fakeApi/todos");
  console.log(response);
  // dispatch(todosLoaded(response.todos));
}
