import React from "react";
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar(prop) {

  const [ todo, setTodo] = useState('');

  function handleTodoChange( event) {
    const newTodo = event.target.value;
    setTodo(newTodo);
  }

  function handleTodoAdd() {
    if( todo === '') {
      alert('Add a todo !!');
      return;
    }
    let temp = todo;
    setTodo('');
    console.log(prop.onAdd);
    prop.onAdd(temp);
  }

  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar__brand"><i className="bi bi-card-checklist"> </i>Todo List</h1>
        <div className="navbar__div">
          <input 
            type="text" 
            className="navbar__input--text" 
            onChange={handleTodoChange}
            placeholder="Add Todo Here.."
            value={todo}
          />
          <button className="navbar__button" onClick={handleTodoAdd}>Add Todo</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;