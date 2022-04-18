import {
    useEffect, Link, useTodoListContext, useUsersContext, getSession, getUserFromSession,
    LogOut, FontAwesomeIcon, Formik, addTodoValidationSchema, Button, Form, Container, ListGroup, InputGroup
} from './Index';

const ToDoList = () => {
    const usersContext = useUsersContext();
    const todoListContext = useTodoListContext();
    const loginUserId = getSession();
    const userInSession = getUserFromSession(usersContext.users, loginUserId);
    const addTodoValidation = addTodoValidationSchema();

    useEffect(() => {
        todoListContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
    }, [loginUserId]);

    const handleFormSubmit = (values) => {
        todoListContext.todosDispatch({ type: 'ADD_TODO', userid: loginUserId, text: values.addTodo });
        todoListContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
    }

    const handleRemoveTodo = e => {
        const id = e.target.id;
        todoListContext.todosDispatch({ type: 'REMOVE_TODO', id });
        todoListContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
    }

    return (
        <Container className="my-1">
            <LogOut />
            <Formik validationSchema={addTodoValidation} onSubmit={handleFormSubmit} initialValues={{ addTodo: "" }}>
                {
                    ({ handleSubmit, handleChange, values, errors }) => (
                        <Form onSubmit={handleSubmit} className="mb-3">
                            <Form.Group controlId="validationFormikAddTodo">
                                <InputGroup>
                                    <Form.Control type="text" name='addTodo' value={values.addTodo} onChange={handleChange}
                                        isInvalid={!!errors.addTodo} placeholder="Yeni Yapılacak Ekle" />
                                    <Button type="submit" variant="outline-success"><FontAwesomeIcon icon="fa-solid fa-plus" /></Button>
                                    <Form.Control.Feedback tooltip type='invalid'> {errors.addTodo} </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    )
                }
            </Formik>
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