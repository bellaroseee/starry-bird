import React from 'react';
import {Container, Col, Row, Button} from "react-bootstrap";
import {Fade} from 'react-reveal';
import { Link as ScrollLink, Element } from 'react-scroll'
import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <Container style={{marginTop: "24vh", marginBottom: "50vh"}}>
                <Col className="text-center">
                    <h1 style={{fontSize: "4em", fontFamily: "'Fredoka One', cursive", color: "#de6600"}}>
                        Starry Bird &nbsp;
                        <img src="assets/icons/bird.png"
                             onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')}
                             width="10%"
                             height="10%"
                             alt="Bird Icon"/>
                    </h1>
                    <p style={{fontSize: "40px", fontFamily: "'Karla', sans-serif", color: "hsl(29, 40%, 55%)"}}> Neural-Style Transfer</p>
                </Col>
                <Row className="justify-content-center">
                    <ScrollLink to="nst" smooth={true} duration={500}>
                        <Button variant="outline-warning" style={{margin: "5px", width: "200px"}}>
                            What is it?
                        </Button>
                    </ScrollLink>
                    <ScrollLink to="motivation" smooth={true} duration={500}>
                        <Button variant="outline-warning" style={{margin: "5px", width: "200px"}}>
                            Motivation
                        </Button>
                    </ScrollLink>
                    <ScrollLink to="try" smooth={true} duration={500}>
                        <Button variant="outline-warning" style={{margin: "5px", width: "200px"}}>
                            Live Demo
                        </Button>
                    </ScrollLink>
                </Row>
            </Container>
            <Fade delay={200}>
                <hr style={{borderWidth: "5px", marginTop: "10em", paddingBottom: "0px", marginBottom:"0px"}}/>
                <Container style={{
                    backgroundImage: `url(assets/images/starry_night.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:  "cover"
                }} fluid>
                    <Element name="nst">
                        <Container style={{paddingTop: "20em", paddingBottom: "20em"}}>
                            <Col lg={6}>
                                <div style={{borderRadius: "15px",
                                    padding: "30px 15px 30px 15px",
                                    background: "rgba(254, 160, 47, 0.9)",
                                }}>
                                    <h1 className="text-left" style={{fontSize: "3em"}}>What's Neural Style Transfer?</h1>
                                    <h5> 'Good artists never die, they just fade away...'</h5>
                                    <p style={{fontSize: "1em"}}> Neural Style Transfer (NST) is the process of blending a content image (a.k.a base image) with a style image
                                        (for example that of a famous artist) and applying that particular style onto the image.
                                        Think of it as re-painting that base image in the style of that artist, say Vincent Van Gogh
                                    </p>
                                    <Link to={'./examples'}>
                                        <Button variant="outline-dark">
                                            Examples
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Container>
                    </Element>
                </Container>
                <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>
                <Container style={{
                    backgroundImage: `url(assets/images/waves.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:  "cover"
                }} fluid>
                    <Element name="motivation">
                        <Container style={{paddingTop: "20em", paddingBottom: "20em"}}>
                            <Col lg={6}>
                                <div style={{borderRadius: "15px",
                                    padding: "30px 15px 30px 15px",
                                    background: "rgba(254, 160, 47, 0.9)",
                                }}>
                                    <h1 className="text-left" style={{fontSize: "3em"}}>Approach and Motivation</h1>
                                    <p style={{fontSize: "1em"}}>
                                        We approached this by utilizing the VGG-19 models to train on the picture and produce a feasible output.
                                    </p>
                                    <Link to={'./about'}>
                                        <Button variant="outline-dark">
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Container>
                    </Element>
                </Container>
                <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>
                <Container style={{
                    backgroundImage: `url(assets/images/wheatfield.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:  "cover"
                }} fluid>
                    <Element name="try">
                        <Container style={{paddingTop: "20em", paddingBottom: "20em"}}>
                            <Col lg={6}>
                                <div style={{borderRadius: "15px",
                                    padding: "30px 15px 30px 15px",
                                    background: "rgba(254, 160, 47, 0.9)",
                                }}>
                                    <h1 className="text-left" style={{fontSize: "3em"}}>Ready to try it for yourself?</h1>
                                    <h5> Explore all possible combinations with the working demo!</h5>
                                    <Link to={'./demo'}>
                                        <Button variant="outline-dark">
                                            Live Demo
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Container>
                    </Element>
                </Container>
            </Fade>
        </>
    );
}

export default Home;