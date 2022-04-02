import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoListContext } from "../../store/contexts/TodoListContext";
import { Table, Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import LogOut from "../login/LogOut";
import { UsersContext } from "../../store/contexts/UsersContext";
import { getSession } from "../../utils/Session";

const ToDoListEdit = () => {
    const { todos, todosDispatch } = useContext(TodoListContext);
    const { users } = useContext(UsersContext);
    const [editTodo, setEditTodo] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { todoid } = useParams();
    const loginUserId = getSession();
    const getLoginUser = users.filter(user => user.id == loginUserId);
    const todo = todos.filterData.filter(todo => todo.id == todoid);

    const handleFormSubmit = e => {
        todosDispatch({ type: 'EDIT_TODO', id: todoid, editTodo });
        todosDispatch({ type: 'FILTER_FOR_USER', loginUserId, admin: getLoginUser[0].admin });
        setShowModal(true);
        setTimeout(() => {
            navigate("/TodoList");
        }, 3000);
        e.preventDefault();
    }

    return (
        <Container className="my-5">
            <LogOut />

            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>BAŞARILI</Modal.Title>
                </Modal.Header>
                <Modal.Body>Değişiklikler kaydedildi. 3 saniye sonra yapılacaklar
                    sayfasına yönlendirileceksiniz!</Modal.Body>
            </Modal>

            <Row>
                <Col xs={12}>
                    <Table>
                        <thead>
                            <tr>
                                <th>YAPILACAK</th>
                                <th>YENİ YAPILACAK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>{todo[0].text}</td>
                                <td>
                                    <Form onSubmit={handleFormSubmit}>
                                        <Form.Group className="d-inline" controlId="editTodo">
                                            <Form.Control type="text" onChange={e => setEditTodo(e.target.value)}
                                                className="d-inline w-50 mx-2" />
                                        </Form.Group>
                                        <Button type="submit" variant="info">DEĞİŞTİR</Button>
                                    </Form>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default ToDoListEdit;