import React, {useState} from "react";
import {SearchNewsProps} from "@/interfaces/SearchNewsProps.ts";
import {Button, Form, Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link, useNavigate} from "react-router-dom";
import {rssCategories} from "@/constants";
import INewsItem from "@/interfaces/INewsItem.ts";
import {useFeeds} from "@/hooks/useFeeds.ts";

export const SearchNews:React.FC<SearchNewsProps> =({showModal, setShowModal}) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const [searchResult, setSearchResult] = useState<INewsItem[]>([]);
    const navigate = useNavigate();
    const handleCategoryChange = (event:{target: {value: React.SetStateAction<string>;};}) => {
        setSelectedCategory(event.target.value);
    }
    const handleChangeInpput = (event: {target: {value: React.SetStateAction<string>;};}) => {
        setInputValue(event.target.value);
    }

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
                        <Form.Select className="w-50 rounded-2 py-2 px-1">

                        </Form.Select>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    )

}