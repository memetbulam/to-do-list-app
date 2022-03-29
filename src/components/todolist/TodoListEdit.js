import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoListContext } from "../../contexts/TodoListContext";
import { Table, Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import LogOut from "../LogOut";

const ToDoListEdit = () => {
    const { todos } = useContext(TodoListContext);
    const [editTodo, setEditTodo] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { todoid } = useParams();
    const todoIdControl = todos.filter(todo => todo.id == todoid);

    const handleFormSubmit = e => {
        const todoIndex = todos.findIndex(todo => todo.id == todoid);
        todos[todoIndex].text = editTodo;
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
                            {
                                todoIdControl ?
                                    todoIdControl.map(todo => {
                                        return <tr key={todo.id}>
                                            <td>{todo.text}</td>
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
                                    }) : null
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default ToDoListEdit;