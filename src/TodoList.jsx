import React from "react";
import TodoItem from './TodoItem';
import NoTodos from './NoTodos';

function TodoList(props) {

  return props.todos.length !== 0 ? (
    <div className="todolist">
      {props.todos.map( (todo, index) => {
        return (
          <TodoItem 
            key={index} 
            id={index} 
            todo={todo}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  ) :
  (
    <NoTodos />
  );
}

export default TodoList;