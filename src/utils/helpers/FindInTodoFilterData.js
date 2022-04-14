export const findInTodoFilterData = (todos, todoid) => {
    return todos.find(todo => todo.id == todoid);
}