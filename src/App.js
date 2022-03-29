import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import TodoListContextProvider from "./contexts/TodoListContext";
import UsersContextProvider from "./contexts/UsersContext";

import Login from "./components/Login";
import TodoList from "./components/todolist/TodoList";
import TodoListEdit from "./components/todolist/TodoListEdit";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <TodoListContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="TodoList" element={<TodoList />} />
            <Route path="TodoList/:todoid" element={<TodoListEdit />} />
          </Routes>
        </TodoListContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;