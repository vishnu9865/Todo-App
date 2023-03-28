import React from "react";
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TodoItem( props) {

  const [isDone, setIsDone] = useState(false);
  
  function handleDoneButtonClick() {
    setIsDone( previousValue => !previousValue);
  }

  function handleDeleteButtonClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="todolist__item">
      <p 
        className="todolist__content" 
        style={ isDone ? {textDecoration:'line-through'}:{textDecoration:'none'}}
      >
        {props.todo}
      </p>
      <div className="todolist__item-input-group">
        <button 
          className="todolist__button" 
          onClick={handleDoneButtonClick}
        >
          Done
        </button>
        <button 
          className="todolist__button"
          onClick={handleDeleteButtonClick}
        >
          <i className="bi bi-trash2"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;