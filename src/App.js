import Header from "./Mycomponents/Header";
import { AddTodo } from './Mycomponents/AddTodo'
import { Todos } from './Mycomponents/Todos'
import {Footer} from "./Mycomponents/Footer";
import {About} from "./Mycomponents/About";

import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if( localStorage.getItem("todos") === null ) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("I am doing this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0
    } else {
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
    
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos] )
   
  return (
    <>
    <Router>
      <Header title="Shivani's todo" searchBar={true} />
      <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }> 
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
      </Routes>
      <Footer />
    </Router>  
    </>
  );
}

export default App;
