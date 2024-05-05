import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import Todos from "./Components/todos.js";
import React, { useEffect, useState } from "react";
import AddTodo from "./Components/addTodo.js";
import About from "./Components/About.js";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  const m = "Shri Krishna App";
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  const onDelete = (todoo) => {
    console.log("onDelete", todoo);

    const updatedTodo = todo.filter((todoItem) => todoItem !== todoo);
    // Update the todo state
    setTodo(updatedTodo);
    // Update the localStorage with the updated todo array
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };
  const addTodo = (name, description) => {
    let sno;
    if (todo.length === 0) {
      sno = 1;
    } else {
      sno = todo[todo.length - 1].sno + 1;
    }
    console.log("addTodo", name, description);
    let todoItem = { sno: sno, name: name, description: description };
    console.log("addTodo", todoItem);
    setTodo([...todo, todoItem]);
    localStorage.setItem("todo", JSON.stringify([...todo, todoItem]));
  };
  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App">
      <Router>
        <Header title="First React App" />
        <header className="App-header">
          <div>{m}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Hello to Todo App by Shri</code> 
          </p>
        </header>
        <Switch>
          <Route
            exact
            path="React-Todo-App/home_page"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todo={todo} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="React-Todo-App/about_page">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
