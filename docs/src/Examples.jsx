import React from 'react';
import {Container, Col, Row, Jumbotron} from "react-bootstrap";


function Examples() {


    return (
        <>
            <Jumbotron style={{backgroundColor: "hsl(29, 87%, 60%)", marginTop: "2em"}} fluid>
                <Container className="text-center">
                    <h1 style={{fontSize: "4em", fontFamily: "'Fredoka One', cursive", color: "#ffffff"}}>Neural Style Transfer in Action</h1>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <h1 style={{fontFamily: "'Fredoka One', cursive", color: "#fea02f"}}>Original Image</h1>
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/robin.png"
                                    className="img"
                                    alt={"Robin"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <h1 style={{fontFamily: "'Fredoka One', cursive", color: "#fea02f"}}>Style Image</h1>
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/starry_night.jpg"
                                    className="img"
                                    alt={"Robin"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <h1 style={{fontFamily: "'Fredoka One', cursive", color: "#fea02f"}}>Output Image</h1>
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/starrybird.jpg"
                                    className="img"
                                    alt={"Starry Night"}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: "2em"}}>
                    <Col className="text-center">
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/labrador_retriever.jpg"
                                    className="img"
                                    alt={"Labrador"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/crystal_debris.jpg"
                                    className="img"
                                    alt={"Crystal"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/labracrystal.jpg"
                                    className="img"
                                    alt={"Labracrystal"}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: "2em"}}>
                    <Col className="text-center">
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/dubs.jpg"
                                    className="img"
                                    alt={"Dubs"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/abstract.jpg"
                                    className="img"
                                    alt={"Abstract"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div className="thumb">
                            <div className="thumb-inner justify-content-center">
                                <img
                                    src="assets/examples/dubs_abstract.jpg"
                                    className="img"
                                    alt={"DubsAbstract"}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Examples;