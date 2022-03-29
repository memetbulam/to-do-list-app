import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../store/contexts/UsersContext";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
    const navigate = useNavigate();
    const { Users } = useContext(UsersContext);

    const handleFormSubmit = e => {
        const userName = e.target.elements.userName.value;
        const password = e.target.elements.password.value;
        const errorLabel = document.getElementById("checkUsersError");
        const errorUserName = document.getElementById("userName");
        const errorPassword = document.getElementById("password");
        const checkUsers = Users.filter(user => userName === user.username && password === user.password);

        if (checkUsers.length >= 1) {
            sessionStorage.setItem("sessionInfo", JSON.stringify(checkUsers));
            navigate("/TodoList");
        } else {
            errorLabel.style.display = "block";
            errorLabel.style.color = "red";
            errorUserName.style.border = "1px solid red";
            errorPassword.style.border = "1px solid red";
            setTimeout(() => {
                errorLabel.style.display = "none";
                errorUserName.style.border = "1px solid #ced4da";
                errorPassword.style.border = "1px solid #ced4da";
            }, 3000);
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 className="d-flex justify-content-center my-5">GİRİŞ YAP</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={3} />
                <Col lg={6}>
                    <Form className="mx-5 my-5" onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Kullanıcı Adı</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <label className="my-3 text-center" id="checkUsersError" style={{ display: 'none' }}>
                            KULLANICI ADI VEYA ŞİFRE HATALI</label>
                        <Button variant="primary" type="submit" className="w-100">
                            Giriş Yap
                        </Button>
                    </Form>
                </Col>
                <Col lg={3} />
            </Row>
        </Container>
    )
}

export default Login;