import React from "react";
import {SearchNewsProps} from "@/interfaces/SearchNewsProps.ts";
import {Button, Form, Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

export const SearchNews:React.FC<SearchNewsProps> =({showModal, setShowModal}) => {
    const handleClose = () => setShowModal(false);
    return(
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tìm kiếm tin tức</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="container">
                    <Form className="input-group subscribe-form">
                        <Form.Control
                            className="border-2"
                            type="text"
                            placeholder="Nhập tin tức tìm kiếm"/>
                        <Link to={{
                            pathname:"/search-results",
                        }}>
                            <Button className="btn-sm wave-button">Tìm kiếm</Button>
                        </Link>
                    </Form>
                    <div className="py-5">
                        <Form.Label className="me-3">
                            Danh mục thể loại
                        </Form.Label>
                        <Form.Select className="w-50 rounded-2 py-2 px-1"></Form.Select>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    )

}