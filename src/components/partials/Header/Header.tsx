import {Logo} from "@/components/vendors"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, {useEffect, useState} from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./Header.scss"
import {SearchNews} from "@/components/pages/Search/SearchNews.tsx";
import {Weather} from "@/components/partials/Header/Weather.tsx";
import {ThemeToggleButton} from "@/components/vendors/Buttons/ThemeToggleButton.tsx";

export const Header = React.memo(() => {

    const [isShadow, setShadow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleSearchModal = () => {
        setShowModal(true);
        setExpanded(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50)
                setShadow(true);
            else
                setShadow(false);
        });

        return () => {
            window.removeEventListener("scroll", () => {
            });
        }
    }, [])

    return (
        <header id="header" className={isShadow ? 'shadow' : ''}>
            <Navbar
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
                expand="lg"
                className="py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Logo/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Weather/>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Trang chủ</Nav.Link>
                            <Nav.Link as={Link} to="/news" onClick={() => setExpanded(false)}>Tin tức</Nav.Link>
                            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>Về Wavy</Nav.Link>
                        </Nav>

                        <Nav>
                            <button className="btn btn-custom d-flex align-items-center gap-2 fw-semibold"
                                    onClick={handleSearchModal}>
                                <FontAwesomeIcon icon={faSearch}/>
                                <span>Tìm kiếm bài viết</span>
                            </button>
                        </Nav>
                        <Nav>
                            <ThemeToggleButton/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SearchNews showModal={showModal} setShowModal={setShowModal}/>
        </header>
    )
})