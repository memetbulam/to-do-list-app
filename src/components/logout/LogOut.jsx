import { Link, Col, Row, getSession, removeSession, useUsersContext, getUserFromSession } from './Index';

const LogOut = () => {
    const usersContext = useUsersContext();
    const loginUserId = getSession();
    const userName = getUserFromSession(usersContext.users, loginUserId);

    return (
        <Row>
            <Col xs={12} className="d-flex justify-content-end align-items-center my-2">
                <span>Hoş geldin <b>{userName.username}</b></span>
                <Link to="/" className="btn btn-outline-secondary ms-2" onClick={() => { removeSession() }}>Çıkış Yap</Link>
            </Col>
        </Row>
    )
}

export default LogOut;