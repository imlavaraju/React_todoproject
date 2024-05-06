import React from "react";
import { useState } from "react";
import "./index";

function TodoList() {
  const [Todo, setTodo] = useState([]);
  const [inputvalue, setinputvalue] = useState("");

  const AddTodo = () => {
    if (inputvalue.trim() !== "") {
      setTodo([...Todo, inputvalue]);
      setinputvalue("");
    }
  };

  const Deletetodo = (index) => {
    const deletetodo = [...Todo];
    deletetodo.splice(index, 1);
    setTodo(deletetodo);
  };

  return (
    <div className="container">
      <div className="todo">
        <h1> Todilist</h1>
        <div className="todo_1">
          <input
            value={inputvalue}
            onChange={(event) => setinputvalue(event.target.value)}
          />
          <button className="addbutton" onClick={AddTodo}>
            Add
          </button>
        </div>

        <div className="todo_2">
          <ul>
            {Todo.map((eachtodo, index) => (
              <li className="li">
                <div>
                  <input className="checkbox" type="checkbox"></input>
                  {eachtodo}
                </div>
                <button className="delbutton" onClick={() => Deletetodo(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
