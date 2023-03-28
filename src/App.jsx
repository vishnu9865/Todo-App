import React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import TodoList from './TodoList';

function App() {

  const [ todos, setTodos] = useState([]);

  function addTodos( newTodo) {
    setTodos(prev => [...prev, newTodo]);
  }

  function handleDelete( deleteIndex) {
    setTodos( prev => [...prev].filter( ( item, index) => index !== deleteIndex));
  }

  return (
    <>
      <Navbar onAdd={addTodos} />
      <main>
        <TodoList todos={todos} onDelete={handleDelete}/>
      </main>
    </>
  );
}

export default App
