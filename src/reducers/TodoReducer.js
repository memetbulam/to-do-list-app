import uuid from "react-uuid/uuid";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { id: uuid(), userId: action.userid, text: action.text }
            ];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};