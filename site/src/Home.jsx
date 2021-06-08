import React from 'react';
import {Container, Col, Row, Button, Image} from "react-bootstrap";
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
                    <ScrollLink to="methodology" smooth={true} duration={500}>
                        <Button variant="outline-warning" style={{margin: "5px", width: "200px"}}>
                            Methodology
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
                <Container fluid>
                    <hr style={{borderWidth: "5px", marginTop: "10em", paddingBottom: "0px", marginBottom:"0px"}}/>
                    <Element name="nst">
                        <Row>
                            <Container style={{
                                backgroundImage: `url(assets/images/starry_night.jpg)`,
                                backgroundAttachment: "fixed",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize:  "cover"
                            }} fluid>
                                    <Container style={{paddingTop: "20em", paddingBottom: "20em"}}>
                                        <Col lg={6}>
                                            <div style={{borderRadius: "15px",
                                                padding: "30px 15px 30px 15px",
                                                background: "rgba(254, 160, 47, 0.9)",
                                            }}>
                                                <h1 className="text-left" style={{fontFamily: "'Fredoka One', cursive"}}>What's Neural Style Transfer?</h1>
                                                <h5 style={{fontSize: "1.5em", fontFamily: "'Kalam', cursive"}}> 'Good artists never die, they just fade away...'</h5>
                                                <p style={{fontSize: "1em", fontFamily: "'Karla', sans-serif"}}> 
                                                    Neural Style Transfer (NST) is a deep learning algorithm that combines the style of an image with the content of an image.
                                                    Think of it as re-painting an (content) image in the style of that artist, say Vincent Van Gogh
                                                </p>
                                                <Link to={'./examples'}>
                                                    <Button variant="outline-dark">
                                                        Examples
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Container>
                            </Container>
                        </Row>
                    </Element>

                    <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>
                    <Element name="methodology">
                        <Row className="justify-content-center" style={{paddingTop: "15em", paddingBottom: "10em"}}>
                            <Col style={{paddingLeft: "3em", paddingRight: "3em"}}>
                                <Container>
                                    <h1 style={{fontFamily: "'Fredoka One', cursive"}}>General Workflow</h1>
                                    <p style={{fontSize: "1em", fontFamily: "'Karla', sans-serif"}}>
                                        We approached this by utilizing the VGG-19 model to train on the base picture to produce a feasible output.
                                        <br/>
                                        The idea is to run the given images through the same model with shared weights such that they eventually look similar after
                                        some number of iterations. In addition, we expanded further into this by allowing multiple style images to be applied on the same base image.
                                    </p>
                                    <Link to={'./about'}>
                                        <Button variant="outline-dark">
                                            Learn More
                                        </Button>
                                    </Link>
                                </Container>
                            </Col>
                            <Col style={{paddingTop: "5em"}}>
                                <Image src="assets/images/vgg19.png" fluid/>
                                <p style={{fontSize: "1.5vh", fontFamily: "'Karla', sans-serif"}} className="text-center">
                                    (Fig 1.) The general workflow and pipeline for applying the Neural Style Transfer using the VGG-19 CNN.
                                    <br/>
                                    The style image (bottom-left) is applied to the base image (top-left) to produce the output (right).
                                </p>
                            </Col>
                        </Row>
                    </Element>

                    <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>

                    <Row>
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
                                            <h1 className="text-left" style={{fontFamily: "'Fredoka One', cursive"}}>Ready to try it for yourself?</h1>
                                            <p style={{fontSize: "1.5em", fontFamily: "'Karla', sans-serif"}}> Try out our working demo here!</p>
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
                    </Row>
                </Container>
            </Fade>
        </>
    );
}

export default Home;