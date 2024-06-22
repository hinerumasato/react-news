import { Waves } from "@/components/vendors"
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import "./Header.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export const Header = () => {

    const [isShadow, setShadow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50)
                setShadow(true);
            else
                setShadow(false);
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        }
    }, [])

    return (
        <header id="header" className={isShadow ? 'shadow' : ''}>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Row className="align-items-center">
                            <Col>
                                <Waves />
                            </Col>
                            <Col>
                                <h2 className="m-0 brand-name">React News</h2>
                            </Col>
                        </Row>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/news">News</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>

                    <Nav>
                        <button className="btn btn-custom d-flex align-items-center gap-2 fw-semibold">
                            <FontAwesomeIcon icon={faSearch} />
                            <span>Tìm kiếm bài viết</span>
                        </button>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
