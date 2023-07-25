import React, { useState } from "react";
import "./App.css";
import TabHead from "./components/TabHead";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [tab, setTab] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, content: "Do coding challenges", checked: false },
    { id: 2, content: "Do coding challenges", checked: false },
    { id: 3, content: "Do coding challenges", checked: true },
  ]);

  const hadnleSetTab = (selectedTab) => {
    if (tab != selectedTab) {
      setTab(selectedTab);
    }
  };

  const handleCheck = (id) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newList);
  };

  const handleAddTodo = (content) => {
    setTodos((prev) => [
      ...prev,
      { id: todos.length + 1, content, checked: false },
    ]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) return todo;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="title">#todo</h1>

      <TabHead tab={tab} hadnleSetTab={hadnleSetTab} />

      {[0, 1].includes(tab) && <AddTodo handleAddTodo={handleAddTodo} />}

      <Todos todos={todos} handleChange={handleCheck} tab={tab} handleDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
