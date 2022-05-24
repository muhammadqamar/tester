import React from "react";
import "./App.css";
import NumberAdd from "./components/numberAdd";
import TodoApp from "./components/todoApp";

function App() {
  return (
    <div className="App">
      <NumberAdd />
      <br />
      <br />
      <br />
      <TodoApp />
    </div>
  );
}

export default App;
