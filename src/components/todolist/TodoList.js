import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoListContext } from "../../store/contexts/TodoListContext";
import { Table, Button, Form, Container, Col, Row } from "react-bootstrap";
import LogOut from "../login/LogOut";
import { getSession } from "../../utils/Session";
import { UsersContext } from "../../store/contexts/UsersContext";

const ToDoList = () => {
    const { todos, todosDispatch } = useContext(TodoListContext);
    const { users } = useContext(UsersContext);
    const [addTodo, setAddTodo] = useState("");
    const loginUserId = getSession();
    const getLoginUser = users.filter(user => user.id == loginUserId);

    useEffect(() => {
        todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: getLoginUser[0].admin });
    }, [loginUserId]);

    const handleFormSubmit = e => {
        todosDispatch({ type: 'ADD_TODO', userid: loginUserId, text: addTodo });
        todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: getLoginUser[0].admin });
        e.preventDefault();
    }
    const handleRemoveTodo = e => {
        const id = e.target.id;
        todosDispatch({ type: 'REMOVE_TODO', id });
        todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: getLoginUser[0].admin });
    }

    return (
        <Container className="my-5">
            <LogOut />
            <Row>
                <Table hover>
                    <thead>
                        <tr>
                            <th>YAPILACAKLAR</th>
                            <th>EYLEMLER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.filterData.map(todo => {
                                return <tr key={todo.id}>
                                    <td>{todo.text}</td>
                                    <td>
                                        <Link to={"/TodoList/" + todo.id} className="btn btn-info mx-3">DÜZENLE</Link>
                                        <Button type="button" variant="danger" id={todo.id} onClick={handleRemoveTodo}>SİL</Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Col xs={2} className="d-flex justify-content-end align-items-center">
                    <label><b>YENİ YAPILACAK:</b></label>
                </Col>
                <Col xs={10}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="newTodo">
                            <Form.Control type="text" onChange={e => { setAddTodo(e.target.value) }}
                                className="d-inline w-50" />
                            <Button type="submit" className="mx-3 w-25" variant="success">EKLE</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default ToDoList;