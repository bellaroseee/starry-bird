import React from 'react';
import {Container, Image} from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {

    return (
        <>
            <Container className="justify-content-center" style={{marginTop: "3em"}}>
                <div className="text-center">
                    <h1> Uh-oh looks like the page you're looking for can't be found! </h1>
                    <h1>:(</h1>
                    <br/>
                    <h4> Here's a picture of dubs to help you find what you're looking for</h4>
                    <p> <span role="img" aria-label="dog">🐶</span> When you're ready, click on Dubs to get back Home! <span role="img" aria-label="wolf">🐺</span></p>
                    <Link to="/home">
                        <Image width="100%" src="assets/images/dubs.jpg" rounded/>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default NotFound;