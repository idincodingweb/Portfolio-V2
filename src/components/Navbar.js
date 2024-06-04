import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div className="fw-bold text-dark">Idin Code</div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Pages" id="navbarLightDropdownMenuLink">
                            <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#services">Services</Nav.Link> {/* Update the import path */}
                    </Nav>
                    <div className="ms-4">
                        <a href="404.html" className="btn custom-btn custom-border-btn smoothscroll">Get started</a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
