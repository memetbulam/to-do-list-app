import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const LogOut = () => {
    const sessionInfo = JSON.parse(sessionStorage.getItem("sessionInfo"));

    return (
        <Row>
            <Col xs={12} className="d-flex justify-content-end align-items-center my-2">
                <span className="mx-2">Hoş Geldin <b>{sessionInfo[0].username}</b></span>
                <Link to="/" className="btn btn-light" onClick={() => { sessionStorage.removeItem("sessionInfo") }}>Çıkış Yap</Link>
            </Col>
        </Row>
    )
}

export default LogOut;