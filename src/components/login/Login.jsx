import { useState, useNavigate, setSession, useUsersContext, getLoginUser, Form, Button, Container, Row, Col } from './Index';

const Login = () => {
    const navigate = useNavigate();
    const [isSuccess, setSuccess] = useState(true);
    const usersContext = useUsersContext();

    const handleFormSubmit = e => {
        const userName = e.target.elements.userName.value;
        const password = e.target.elements.password.value;
        const loginUser = getLoginUser(usersContext.users, userName, password);

        if (loginUser !== undefined) {
            setSession(loginUser.id);
            setSuccess(true);
            navigate("/TodoList");
        } else {
            setSuccess(false);
            setTimeout(() => {
                setSuccess(true);
            }, 3000);
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 className="d-flex justify-content-center mt-5 mb-0 display-4">GİRİŞ YAP</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={3} />
                <Col lg={6}>
                    <Form className="mx-5 my-5" onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Kullanıcı Adı</Form.Label>
                            <Form.Control type="text" isInvalid={!isSuccess} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control type="password" isInvalid={!isSuccess} />
                        </Form.Group>
                        {
                            isSuccess ? null : <label className="my-3 d-flex justify-content-center text-danger" id="checkUsersError">
                                KULLANICI ADI VEYA ŞİFRE HATALI</label>
                        }
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