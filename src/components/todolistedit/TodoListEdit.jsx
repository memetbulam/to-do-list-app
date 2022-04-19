import {
    useState, useNavigate, useParams, getSession, useTodoListContext, useUsersContext, Popup, LogOut,
    FontAwesomeIcon, Formik, editTodoValidationSchema, Button, Form, Container, InputGroup, getUserFromSession, findInTodoFilterData
} from './Index';

const ToDoListEdit = () => {
    const todosContext = useTodoListContext();
    const usersContext = useUsersContext();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { todoid } = useParams();
    const loginUserId = getSession();
    const userInSession = getUserFromSession(usersContext.users, loginUserId);
    const todo = findInTodoFilterData(todosContext.todos.filterData, todoid);
    const EditTodoValidation = editTodoValidationSchema();

    const handleFormSubmit = values => {
        todosContext.todosDispatch({ type: 'EDIT_TODO', id: todoid, editTodo: values.editTodo });
        todosContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: userInSession.admin });
        setShowModal(true);
        setTimeout(() => {
            navigate("/TodoList");
        }, 3000);
    }

    return (
        <Container className="my-5">
            <LogOut />
            <Popup showNodal={showModal} />
            <div className="d-flex align-items-center">
                <span className="flex-fill">
                    <Formik validationSchema={EditTodoValidation} onSubmit={handleFormSubmit}
                        initialValues={{ editTodo: "" }}>
                        {
                            ({ handleSubmit, handleChange, values, errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group controlId="validationFormikEditTodo">
                                        <InputGroup>
                                            <Form.Control type="text" placeholder={todo.text} name="editTodo"
                                                value={values.editTodo} onChange={handleChange} isInvalid={!!errors.editTodo} />
                                            <Button type="submit" variant="outline-info">
                                                <FontAwesomeIcon icon="fa-solid fa-pen" />
                                            </Button>
                                            <Form.Control.Feedback tooltip type='invalid'> {errors.editTodo} </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Form>
                            )
                        }
                    </Formik>
                </span>
                <Button variant="outline-danger" className="ms-1" onClick={() => { navigate(-1) }}>Vazgeç</Button>
            </div>
        </Container>
    )
}

export default ToDoListEdit;