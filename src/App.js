import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import Todos from "./Components/todos.js";
import React, { useEffect, useState } from "react";
import AddTodo from "./Components/addTodo.js";
// import About from "./Components/About.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router basename="/React-Todo-App">
        <Header title="React-Todo-App" />
        <header className="App-header py-5">
          <div>{m}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <code>Hello to Todo App by Shri</code>
            <p className="lead">
              This React-Todo application marks my first endeavor in creating a
              React application. I've put in efforts to design a user-friendly
              and efficient platform for managing your daily tasks.
            </p>
            <div className="container mt-5">
              <h4 className="mb-3">How to Use</h4>
              <ol className="list-group">
                <li className="list-group-item">
                  <strong>Add Todos:</strong> Provide a title and a brief
                  description, then hit "Submit" to save it.
                </li>
                <li className="list-group-item">
                  <strong>Remove Todos:</strong> Completed a task? Just click on
                  the delete icon below the todo to remove it from your list.
                </li>
              </ol>

              <h4 className="mt-4">Data Privacy</h4>
              <p className="lead">
                Rest assured, your data privacy is our top priority. The app
                stores your todos locally in your browser's localStorage,
                ensuring that your information stays secure and private.
              </p>

              <h4 className="mt-4">Enjoy Task Management</h4>
              <p className="lead">
                I hope you find this app useful for organizing your daily tasks
                efficiently. Feel free to explore and make the most out of
                React-Todo App!
              </p>
            </div>
          </div>
        </header>
        {/* <AddTodo addTodo={addTodo} />
        <Todos todo={todo} onDelete={onDelete} /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todo={todo} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          {/* <Route exact path="src/Components/About.js">
            <About />
          </Route> */}
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
