import { Logo } from "@/components/vendors"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Header.scss"
import {Weather} from "@/components/partials/Header/Weather.tsx";

export const Header = React.memo(() => {

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
            <Navbar bg="light" variant="light" className="py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Logo />
                    </Navbar.Brand>
                    <Weather/>
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
})
