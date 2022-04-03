import React from "react";
import { Modal } from "react-bootstrap";

const Popup = (props) => {
    return (
        <Modal show={props.showNodal}>
            <Modal.Header>
                <Modal.Title>BAŞARILI</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Değişiklikler kaydedildi. 3 saniye sonra yapılacaklar
                sayfasına yönlendirileceksiniz!
            </Modal.Body>
        </Modal>
    );
}

export default Popup;