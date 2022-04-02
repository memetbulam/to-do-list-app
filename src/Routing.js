import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import TodoList from "./components/todolist/TodoList";
import TodoListEdit from "./components/todolist/TodoListEdit";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="TodoList" element={<TodoList />} />
            <Route path="TodoList/:todoid" element={<TodoListEdit />} />
        </Routes>
    )
}

export default Routing;