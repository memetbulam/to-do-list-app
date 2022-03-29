import React, { createContext, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import uuid from "react-uuid";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, todosDispatch] = useReducer(TodoReducer, [
        { id: uuid(), userId: 1, text: "todo string example 1 " },
        { id: uuid(), userId: 1, text: "todo string example 2 " },
        { id: uuid(), userId: 2, text: "todo string example 1" },
        { id: uuid(), userId: 3, text: "todo string example 2" },
        { id: uuid(), userId: 4, text: "todo string example 1" },
        { id: uuid(), userId: 4, text: "todo string example 2" },
        { id: uuid(), userId: 4, text: "todo string example 3" },
        { id: uuid(), userId: 5, text: "todo string example 1" },
        { id: uuid(), userId: 5, text: "todo string example 2" }
    ]);
    return (
        <TodoListContext.Provider value={{ todos, todosDispatch }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;