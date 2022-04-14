import {
    useEffect, useState, Link, useTodoListContext, useUsersContext, getSession, getUserFromSession,
    LogOut, FontAwesomeIcon, Button, Form, Container, ListGroup, InputGroup
} from './Index';

const ToDoList = () => {
    const usersContext = useUsersContext();
    const todoListContext = useTodoListContext();
    const [addTodo, setAddTodo] = useState("");
    const loginUserId = getSession();
    const userInSession = getUserFromSession(usersContext.users, loginUserId);
    useEffect(() => {
        todoListContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
    }, [loginUserId]);

    const handleFormSubmit = e => {
        todoListContext.todosDispatch({ type: 'ADD_TODO', userid: loginUserId, text: addTodo });
        todoListContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
        e.target[0].value = '';
        e.preventDefault();
    }
    const handleRemoveTodo = e => {
        const id = e.target.id;
        todoListContext.todosDispatch({ type: 'REMOVE_TODO', id });
        todoListContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
    }

    return (
        <Container className="my-1">
            <LogOut />
            <Form onSubmit={handleFormSubmit} className="mb-3">
                <Form.Group controlId="newTodo">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Yeni Yapılacak Ekle" onChange={e => { setAddTodo(e.target.value) }} />
                        <Button type="submit" variant="outline-success"><FontAwesomeIcon icon="fa-solid fa-plus" /></Button>
                    </InputGroup>
                </Form.Group>
            </Form>
            <ListGroup as="ol" >
                {
                    todoListContext.todos.filterData.map(todo => {
                        return <ListGroup.Item as="li" key={todo.id} action
                            className="d-flex justify-content-between align-items-center">
                            {todo.text}
                            <span className="d-inline-flex">
                                <Link to={"/TodoList/" + todo.id} className="me-2 btn btn-outline-info">
                                    <FontAwesomeIcon icon="fa-solid fa-pen" />
                                </Link>
                                <Button type="button" id={todo.id} onClick={handleRemoveTodo} variant="outline-danger" >
                                    <FontAwesomeIcon icon="fa-solid fa-eraser" style={{ pointerEvents: "none" }} />
                                </Button>
                            </span>
                        </ListGroup.Item>
                    })
                }
            </ListGroup>
        </Container>
    )
}
export default ToDoList;