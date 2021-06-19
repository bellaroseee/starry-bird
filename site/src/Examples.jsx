import React from 'react';
import {Container, Col, Row, Jumbotron} from "react-bootstrap";
import robin from "./assets/examples/robin.png";
import starryNight from "./assets/examples/starry_night.jpg";
import starryBird from "./assets/examples/starrybird.jpg";
import labrador from "./assets/examples/labrador_retriever.jpg";
import crystalDebris from "./assets/examples/crystal_debris.jpg";
import labraCrystal from "./assets/examples/labracrystal.jpg";
import dubs from "./assets/examples/dubs.jpg";
import abstract from "./assets/examples/abstract.jpg";
import dubsAbstract from "./assets/examples/dubs_abstract.jpg";

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
                                    src={robin}
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
                                    src={starryNight}
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
                                    src={starryBird}
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
                                    src={labrador}
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
                                    src={crystalDebris}
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
                                    src={labraCrystal}
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
                                    src={dubs}
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
                                    src={abstract}
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
                                    src={dubsAbstract}
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