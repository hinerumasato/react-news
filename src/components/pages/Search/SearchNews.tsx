import React, { FormEvent, useState } from "react";
import { SearchNewsProps } from "@/interfaces/SearchNewsProps.ts";
import { Button, Form, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { rssCategories } from "@/constants";
import INewsItem from "@/interfaces/INewsItem.ts";
import { useFeeds } from "@/hooks/useFeeds.ts";
import "@/components/pages/Search/SearchNews.scss";

export const SearchNews: React.FC<SearchNewsProps> = ({ showModal, setShowModal }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const navigate = useNavigate();
    const handleCategoryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCategory(event.target.value);
    }
    const handleChangeInpput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    }
    const handleSearch = () => {
        const category = rssCategories.find(category => category.name === selectedCategory);
        const rssLink = category ? category.rss : 'home.rss';
        useFeeds(rssLink, 50).then((newItems: INewsItem[]) => {
            const results = newItems.filter(item => {
                return item.title.toLowerCase().includes(inputValue.toLowerCase())
            }
            );
            navigate("/search-results", { state: { results: results } });
            handleClose();
        })

    }

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        handleSearch();
    }

    const handleClose = () => setShowModal(false);
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tìm kiếm tin tức</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="container">
                    <Form className="input-group subscribe-form" onSubmit={handleSubmitForm}>
                        <Form.Control
                            className="border-2"
                            type="text"
                            value={inputValue}
                            onChange={handleChangeInpput}
                            placeholder="Nhập tin tức tìm kiếm" />
                        <Button className="btn-sm wave-button" onClick={handleSearch}>Tìm kiếm</Button>
                    </Form>
                    <div className="py-4">
                        <Form.Label className="me-3">
                            Danh mục thể loại
                        </Form.Label>
                        <Form.Select className="w-50 rounded-2 py-2 px-1" value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="Tất cả">Tất cả</option>
                            {rssCategories.map((category, index) => (
                                <option key={index} value={category.name}>{category.name}</option>
                            ))}
                        </Form.Select>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    )

}