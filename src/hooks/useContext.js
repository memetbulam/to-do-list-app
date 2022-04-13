import { useContext } from "react";
import { TodoListContext } from '../store/contexts/TodoListContext';
import { UsersContext } from "../store/contexts/UsersContext";

export const useTodoListContext = () => {
    return useContext(TodoListContext);
}

export const useUsersContext = () => {
    return useContext(UsersContext);
}