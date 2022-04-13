import { Link, Col, Row, getSession, removeSession, useUsersContext } from './Index';

const LogOut = () => {
    const loginUserId = getSession();
    const usersContext = useUsersContext();
    const userName = usersContext.users.filter(user => user.id === loginUserId);

    return (
        <Row>
            <Col xs={12} className="d-flex justify-content-end align-items-center my-2">
                <span>Hoş geldin <b>{userName[0].username}</b></span>
                <Link to="/" className="btn btn-outline-secondary ms-2" onClick={() => { removeSession() }}>Çıkış Yap</Link>
            </Col>
        </Row>
    )
}

export default LogOut;