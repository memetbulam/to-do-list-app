import {
    useState, useNavigate, useParams, getSession, useTodoListContext, useUsersContext,
    Popup, LogOut, FontAwesomeIcon, Button, Form, Container, InputGroup
} from './Index';

const ToDoListEdit = () => {
    const todosContext = useTodoListContext();
    const usersContext = useUsersContext();
    const [editTodo, setEditTodo] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { todoid } = useParams();
    const loginUserId = getSession();
    const getLoginUser = usersContext.users.filter(user => user.id == loginUserId);
    const todo = todosContext.todos.filterData.filter(todo => todo.id == todoid);

    const handleFormSubmit = e => {
        todosContext.todosDispatch({ type: 'EDIT_TODO', id: todoid, editTodo });
        todosContext.todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: getLoginUser[0].admin });
        setShowModal(true);
        setTimeout(() => {
            navigate("/TodoList");
        }, 3000);
        e.preventDefault();
    }

    return (
        <Container className="my-5">
            <LogOut />
            <Popup showNodal={showModal} />
            <div className="d-flex align-items-center">
                <span className="me-3">

                </span>
                <span className="flex-fill">
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="editTodo">
                            <InputGroup>
                                <Form.Control type="text" placeholder={todo[0].text} onChange={e => setEditTodo(e.target.value)} />
                                <Button type="submit" variant="outline-info">
                                    <FontAwesomeIcon icon="fa-solid fa-pen" />
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </span>
                <span>
                    <Button variant="outline-danger" className="ms-1" onClick={() => { navigate(-1) }}>Vazgeç</Button>
                </span>
            </div>
        </Container>
    )
}
export default ToDoListEdit;