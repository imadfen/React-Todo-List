import React, { useEffect, useState } from "react";
import "./App.css";
import TabHead from "./components/TabHead";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import TrashBinIcon from "./components/TrashBinIcon";

function App() {
  const [tab, setTab] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalStorageData();
  }, []);

  const handleSetTab = (selectedTab) => {
    if (tab != selectedTab) {
      setTab(selectedTab);
    }
  };

  const handleCheck = (id) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    updateLocalStorageData(newList);
  };

  const handleAddTodo = (content) => {
    const newList = todos;
    newList.push({ id: todos.length + 1, content, checked: false });
    updateLocalStorageData(newList);
  };

  const handleDeleteTodo = (id) => {
    const newList = todos.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    updateLocalStorageData(newList);
  };

  const handleDeleteAll = () => {
    const newList = todos.filter((todo) => {
      if (!todo.checked) return todo;
    });
    updateLocalStorageData(newList);
  };

  const checkedTodoExist = (list) => {
    return list.some((todo) => todo.checked === true);
  };

  const updateLocalStorageData = (newList) => {
    localStorage.setItem("todos", JSON.stringify(newList));
    getLocalStorageData();
  };

  const getLocalStorageData = () => {
    const stringList = localStorage.getItem("todos");
    if (stringList != null) {
      const list = JSON.parse(stringList);
      setTodos(list);
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">#todo</h1>

        <TabHead tab={tab} handleSetTab={handleSetTab} />

        {[0, 1].includes(tab) && <AddTodo handleAddTodo={handleAddTodo} />}

        <Todos
          todos={todos}
          handleChange={handleCheck}
          tab={tab}
          handleDelete={handleDeleteTodo}
        />

        {tab == 2 && checkedTodoExist(todos) && (
          <button className="delete-all-button" onClick={handleDeleteAll}>
            <TrashBinIcon className="trash-icon" />
            <p>delete all</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
