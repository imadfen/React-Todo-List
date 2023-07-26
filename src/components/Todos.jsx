import React from "react";
import TrashBinIcon from "./TrashBinIcon";

function Todos({ todos, handleChange, tab, handleDelete }) {

  const filterTodos = (list, checked = undefined) => {
    if (list.length == 0) return []
    return list.filter((obj) => {
      if (checked == undefined || obj.checked == checked) return obj;
    });
  };

  const condition = tab == 0 ? undefined : tab == 2

  return (
    <div className="todos-container">
      {filterTodos(todos, condition).length == 0 ?
        <p className="empty-text">empty</p> :
        filterTodos(todos, condition).map((todo) => {
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
                <TrashBinIcon className="delete-button" onClick={() => handleDelete(todo.id)} />
              }
            </div>
          )
        })}

        <p className="signature">by Imad Fenniche</p>
    </div>
  );
}

export default Todos;
