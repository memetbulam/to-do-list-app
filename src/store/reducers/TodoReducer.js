import uuid from "react-uuid/uuid";

export const TodoReducer = (todos, action) => {
    switch (action.type) {
        case 'FILTER_FOR_USER':
            return {
                data: [
                    ...todos.data
                ],
                filterData: todos.data.filter(todo => todo.userId === action.loginUserId || action.admin === true)
            }
        case 'ADD_TODO':
            return {
                data: [
                    ...todos.data,
                    { id: uuid(), userId: action.userid, text: action.text }
                ],
                filterData: []
            };
        case 'REMOVE_TODO':
            return {
                data: [
                    ...todos.data.filter(todo => todo.id !== action.id)
                ],
                filterData: []
            };
        case 'EDIT_TODO':
            const todoIndex = todos.data.findIndex(todo => todo.id == action.id);
            todos.data[todoIndex].text = action.editTodo;
            return todos;
        default:
            return todos;
    }
};