import React from 'react';
import {Container, Col, Row, Button, Image} from "react-bootstrap";
import {Fade} from 'react-reveal';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from "react-router-dom";
import birdIcon from "./assets/icons/bird.png";
import nstIntroImg from "./assets/images/starry_night.jpg";
import vgg19 from "./assets/images/vgg19.png";
import demoImg from "./assets/images/waves.jpg";

function Home() {

    return (
        <>
            <Container style={{marginTop: "24vh", marginBottom: "50vh"}}>
                <Col className="text-center">
                    <h1 style={{fontSize: "4em", fontFamily: "'Fredoka One', cursive", color: "#de6600"}}>
                        Starry Bird &nbsp;
                        <img src={birdIcon}
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
            <Container fluid>
                <Fade delay={100}>
                    <hr style={{borderWidth: "5px", marginTop: "10em", paddingBottom: "0px", marginBottom:"0px"}}/>
                    <Element name="nst">
                        <Row>
                            <Container style={{
                                backgroundImage: `url(${nstIntroImg})`,
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
                                                    Think of it as re-painting a (content) image in the style of that artist, say, Vincent Van Gogh.
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
                </Fade>
                <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>
                <Element name="methodology">
                    <Row className="justify-content-center" style={{paddingTop: "15em", paddingBottom: "10em"}}>
                        <Col style={{paddingLeft: "3em", paddingRight: "3em"}}>
                            <Container>
                                <h1 style={{fontFamily: "'Fredoka One', cursive"}}>General Workflow</h1>
                                <p style={{fontSize: "1em", fontFamily: "'Karla', sans-serif"}}>
                                    We utilized VGG-19 network layers to extract the features from the content and style image.
                                    <br/><br/>
                                    For each train iteration, style content loss is calculated with gram matrix and gradient is applied to the image.
                                    <br/><br/>
                                    A significant improvement we made was to expanded further by combining multiple style images and then combine it with the single content image.
                                </p>
                                <Link to={'./about'}>
                                    <Button variant="outline-dark">
                                        Learn More
                                    </Button>
                                </Link>
                            </Container>
                        </Col>
                        <Col style={{paddingTop: "5em"}}>
                            <Image src={vgg19} fluid/>
                            <p style={{fontSize: "1.5vh", fontFamily: "'Karla', sans-serif"}} className="text-center">
                                (Fig 1.) The general workflow and pipeline for applying the Neural Style Transfer using the VGG-19 CNN.
                                <br/>
                                The style image (bottom-left) is applied to the base image (top-left) to produce the output (right).
                            </p>
                        </Col>
                    </Row>
                </Element>

                <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>

                <Fade delay={100}>
                    <Row>
                        <Container style={{
                            backgroundImage: `url(${demoImg})`,
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
                </Fade>
            </Container>
        </>
    );
}

export default Home;