import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { removeSession } from "../../utils/Session";

const LogOut = () => {

    return (
        <Row>
            <Col xs={12} className="d-flex justify-content-end align-items-center my-2">
                <Link to="/" className="btn btn-light" onClick={() => { removeSession() }}>Çıkış Yap</Link>
            </Col>
        </Row>
    )
}

export default LogOut;