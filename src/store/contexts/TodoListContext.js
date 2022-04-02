import React, { createContext, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import uuid from "react-uuid";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, todosDispatch] = useReducer(TodoReducer, {
        data: [
            { id: uuid(), userId: 1, text: "todo text 1" },
            { id: uuid(), userId: 1, text: "todo text 2" },
            { id: uuid(), userId: 2, text: "todo text 3" },
            { id: uuid(), userId: 3, text: "todo text 4" },
            { id: uuid(), userId: 4, text: "todo text 5" },
            { id: uuid(), userId: 4, text: "todo text 6" },
            { id: uuid(), userId: 4, text: "todo text 7" },
            { id: uuid(), userId: 5, text: "todo text 8" },
            { id: uuid(), userId: 5, text: "todo text 9" }
        ],
        filterData: []
    });
    return (
        <TodoListContext.Provider value={{ todos, todosDispatch }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;