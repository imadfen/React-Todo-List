import React from "react";
import deleteIcon from "../delete_icon.svg"

function Todos({ todos, handleChange, tab, handleDelete }) {
  return (
    <div className="todos-container">
      {todos.map((todo) => {
        if (tab == 0 || tab == 1 && !todo.checked || tab == 2 && todo.checked) {
          return (
            <div key={todo.id} className="todo">
              <input
                type="checkbox"
                className="checkbox"
                id={`checkbox-${todo.id}`}
                checked={todo.checked}
                onChange={(e) => handleChange(todo.id)}
              />
              <label
                htmlFor={`checkbox-${todo.id}`}
                className={`todo-text ${todo.checked ? "line-through" : ""}`}
              >
                {todo.content}
              </label>
              {tab == 2 &&
                <img src={deleteIcon} alt="delete" className="delete-button" onClick={() => handleDelete(todo.id)} />
              }
            </div>
          )
        }
      })}
    </div>
  );
}

export default Todos;
