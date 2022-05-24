import React, { useEffect, useState } from "react";
import { allTypes } from "../../store/types";
import { addInputText, removeInputText, deletAllList } from "../../store/actions/todoListApp";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../store/actions/todoListApp";

const Index = () => {
  const todoAppReducers = useSelector((state) => state.todoAppReducers);
  const despach = useDispatch();

  const [addText, setAddText] = useState("");

  useEffect(() => {
    // () => despach(fetchTodos);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <h1>ToDo App</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          placeholder="add text"
          type="text"
          value={addText}
          onChange={(e) => {
            setAddText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (addText == 0) {
              alert("Add Input Text");
            } else {
              despach(addInputText(addText), setAddText(""));
            }
          }}
        >
          add
        </button>
      </div>
      {todoAppReducers.list.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <h4>{item.title}</h4>
            <button
              onClick={() => {
                despach(removeInputText(item.id), setAddText(""));
              }}
              style={{ height: "25px" }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <br />
      <br />

      <button style={{ width: "100px", margin: "auto" }} onClick={() => despach(deletAllList())}>
        Delet All
      </button>
    </div>
  );
};

export default Index;
