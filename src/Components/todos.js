import React from "react";
import Todo from "./todo.js";

const todos = (props) => {
  return (
    <div className="App-header">
        <h3 className="App-title"> Todos List </h3>
        {props.todo.length === 0 ? "No todo list item": props.todo.map((todoItem) =>{return <Todo todo={todoItem} key={todoItem.sno} onDelete={props.onDelete}/> })}
    </div>
  );
};

export default todos;
