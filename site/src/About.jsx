import React from 'react';
import {Row, Container, Tabs, Tab} from "react-bootstrap";

function About() {

    return (
        <>
            <Container className="float-lg-left" style={{marginTop: "5em"}} fluid>
                <Tabs defaultActiveKey="motivation" id="uncontrolled-tab">
                    <Tab eventKey="motivation" title="Motivation" >
                        <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="setup" title="Setup" >
                    </Tab>
                    <Tab eventKey="methodology" title="Methodology" >
                    </Tab>
                    <Tab eventKey="video" title="Video" >

                    </Tab>
                </Tabs>
            </Container>
            {/*Not sure why not having an element at the bottom makes it crash...*/}
            <Row>
            </Row>
        </>
    );
}

export default About;