import React from 'react';
import {Container, Button, Col} from "react-bootstrap";
import { Link } from "react-router-dom";



function ProjectPreview(props) {
    return (
        <>
            <Container style={{paddingTop: "20em", paddingBottom: "20em"}}>
                <Col lg={6}>
                    <div style={{borderRadius: "15px",
                        padding: "30px 15px 30px 15px",
                        background: "rgba(200, 200, 200, 0.9)"
                    }}>
                        <h1 className="text-left" style={{fontSize: "3em"}}>{props.heading}</h1>
                        <h5>{props.description}</h5>
                        <Link to={props.pathToPage}>
                            <Button variant="success">
                                More
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Container>
        </>
    );

    /*
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
     */
}

export default ProjectPreview;