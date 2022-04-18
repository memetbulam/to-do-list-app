import {
    useNavigate, setSession, useUsersContext, getLoginUser, Formik, loginValidationSchema,
    Form, Button, Container, Row, Col, InputGroup
} from './Index';

const Login = () => {
    const navigate = useNavigate();
    const usersContext = useUsersContext();
    const validation = loginValidationSchema();

    const handleFormSubmit = (values, actions) => {
        const userName = values.userName;
        const password = values.password;
        const loginUser = getLoginUser(usersContext.users, userName, password);

        if (loginUser !== undefined) {
            setSession(loginUser.id);
            navigate("/TodoList");
        } else {
            actions.setErrors({ ["userName"]: " ", ["password"]: "Kullanıcı Adı veya Şifre Hatalı!" });
            setTimeout(() => actions.setErrors({ ["userName"]: "", ["password"]: "" }), 2500);
        }
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
                    <Formik validationSchema={validation} onSubmit={handleFormSubmit}
                        initialValues={{ userName: "", password: "" }}>
                        {
                            ({ handleSubmit, handleChange, values, errors }) => (
                                <Form className="mx-5 my-5" noValidate onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="validationFormikUserName">
                                        <Form.Label>Kullanıcı Adı</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control type="text" name='userName' value={values.userName}
                                                onChange={handleChange} isInvalid={!!errors.userName} />
                                            <Form.Control.Feedback type='invalid'> {errors.userName} </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="validationFormikPassword">
                                        <Form.Label>Şifre</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control type="password" name='password' value={values.password}
                                                onChange={handleChange} isInvalid={!!errors.password} />
                                            <Form.Control.Feedback type='invalid'> {errors.password} </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="w-100">
                                        GİRİŞ YAP
                                    </Button>
                                </Form>
                            )
                        }
                    </Formik>
                </Col>
                <Col lg={3} />
            </Row>
        </Container>
    )
}

export default Login;