import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { getSession, removeSession } from "../../utils/Session";
import { UsersContext } from '../../store/contexts/UsersContext';

const LogOut = () => {
    const { users } = useContext(UsersContext);
    const loginUserId = getSession();
    const userName = users.filter(user => user.id === loginUserId);

    return (
        <Row>
            <Col xs={12} className="d-flex justify-content-end align-items-center my-2">
                <span>Hoş geldin <b>{userName[0].username}</b></span>
                <Link to="/" className="btn btn-light" onClick={() => { removeSession() }}>Çıkış Yap</Link>
            </Col>
        </Row>
    )
}

export default LogOut;