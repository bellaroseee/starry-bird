import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

function NavigationBar() {

    return (
        <Container>
            <Navbar style={{opacity: "0.95"}} fixed="top" collapseOnSelect expand="md" variant="light" bg="white">
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <LinkContainer eventKey="1" style={{margin: "15px 20px 15px 20px", color: "#003f5a"}} to="/home">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer eventKey="2" style={{margin: "15px 20px 15px 20px", color: "#003f5a"}} to="/about">
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer eventKey="3" style={{margin: "15px 20px 15px 20px", color: "#003f5a"}} to="/demo">
                            <Nav.Link>Demo</Nav.Link>
                        </LinkContainer>
                        <LinkContainer eventKey="4" style={{margin: "15px 20px 15px 20px", color: "#003f5a"}} to="/credits">
                            <Nav.Link>Credits</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavigationBar;