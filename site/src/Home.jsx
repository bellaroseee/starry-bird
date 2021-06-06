import React from 'react';
import ProjectPreview from "./ProjectPreview";
import {Container, Col, Row, Button} from "react-bootstrap";
import {Fade} from 'react-reveal';
import { Link as ScrollLink, Element } from 'react-scroll'

function Home() {

    const howdyDesc = "Neural-Style Transfer";

    return (
        <>
            <Container style={{marginTop: "24vh", marginBottom: "50vh"}}>
                <Col className="text-center">
                    <h1 style={{fontSize: "4em", fontFamily: "'Fredoka One', cursive", color: "#85754d"}}>
                        Starry Bird &nbsp;
                        <img src="assets/icons/bird.png"
                             onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')}
                             width="10%"
                             height="10%"
                             alt="UW Icon"/>
                    </h1>
                    <p style={{fontSize: "40px"}}> Neural-Style Transfer</p>
                </Col>
                <Row className="justify-content-center">
                    <ScrollLink to="howdydoody" smooth={true} duration={500}>
                        <Button variant="outline-secondary" style={{margin: "5px", width: "200px"}}>
                            Howdy-Doody
                        </Button>
                    </ScrollLink>
                    <ScrollLink to="howdydoody" smooth={true} duration={500}>
                        <Button variant="outline-secondary" style={{margin: "5px", width: "200px"}}>
                            Howdy-Doody
                        </Button>
                    </ScrollLink>
                    <ScrollLink to="howdydoody" smooth={true} duration={500}>
                        <Button variant="outline-secondary" style={{margin: "5px", width: "200px"}}>
                            Howdy-Doody
                        </Button>
                    </ScrollLink>
                </Row>
            </Container>
            <Fade delay={200}>
                <hr style={{borderWidth: "5px", marginTop: "10em", paddingBottom: "0px", marginBottom:"0px"}}/>
                <Container style={{
                    backgroundImage: `url(assets/images/dubs.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:  "cover"
                }} fluid>
                    <Element name="howdydoody">
                        <ProjectPreview heading="HowdyDoody" description={howdyDesc} pathToPage={"/howdydoody"}/>
                    </Element>
                </Container>
                <hr style={{borderWidth: "5px", padding: "0px", margin:"0px"}}/>
            </Fade>
        </>
    );
}

export default Home;