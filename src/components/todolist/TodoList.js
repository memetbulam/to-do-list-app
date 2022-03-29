import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoListContext } from "../../contexts/TodoListContext";
import { Table, Button, Form, Container, Col, Row } from "react-bootstrap";
import LogOut from "../LogOut";

const ToDoList = () => {
    const { todos, todosDispatch } = useContext(TodoListContext);
    const [addTodo, setAddTodo] = useState("");
    const sessionInfo = JSON.parse(sessionStorage.getItem("sessionInfo"));
    const userIdControl = todos.filter(todo => todo.userId === sessionInfo[0].id);

    const handleFormSubmit = e => {
        const sessionId = sessionInfo[0].id;
        todosDispatch({ type: 'ADD_TODO', userid: sessionId, text: addTodo });
        e.preventDefault();
    }
    const handleRemoveTodo = e => {
        const id = e.target.id;
        todosDispatch({ type: 'REMOVE_TODO', id });
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
                            sessionInfo[0].admin ?
                                todos.map(todo => {
                                    return <tr key={todo.id}>
                                        <td>{todo.text}</td>
                                        <td>
                                            <Link to={"/TodoList/" + todo.id} className="btn btn-info mx-3" >DÜZENLE</Link>
                                            <Button type="button" variant="danger" id={todo.id}
                                                onClick={handleRemoveTodo}>SİL</Button>
                                        </td>
                                    </tr>
                                }) : null
                        }
                        {
                            userIdControl && sessionInfo[0].admin === false ?
                                userIdControl.map(todo => {
                                    return <tr key={todo.id}>
                                        <td> {todo.text}</td>
                                        <td>
                                            <Link to={"/TodoList/" + todo.id}
                                                className="btn btn-info mx-3">DÜZENLE</Link>
                                            <Button type="button" variant="danger" id={todo.id}
                                                onClick={handleRemoveTodo}>SİL</Button>
                                        </td>
                                    </tr>
                                }) : null
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