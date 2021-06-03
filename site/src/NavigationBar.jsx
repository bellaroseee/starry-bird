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
                        <LinkContainer eventKey="1" style={{margin: "15px 20px 15px 20px", color: "#85754d"}} to="/home">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer eventKey="2" style={{margin: "15px 20px 15px 20px", color: "#85754d"}} to="/about">
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer eventKey="3" style={{margin: "15px 20px 15px 20px", color: "#85754d"}} to="/demo">
                            <Nav.Link>Demo</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavigationBar;