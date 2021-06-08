import React from 'react';
import {Row, Container, Tabs, Tab} from "react-bootstrap";
import "./About.css"

function About() {

    return (
        <>
            <Container className="float-lg-left" style={{marginTop: "5em"}} fluid>
                <Tabs defaultActiveKey="motivation" id="uncontrolled-tab" style={{inactiveTintColor: 'green'}}>
                    <Tab eventKey="motivation" title="Motivation" style={{marginTop: "30px"}}>
                        <Container>
                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Motivation</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>We are trying to to draw an image, i.e. bird, dog, etc, in an art style, i.e. manga, starry night using artistic style transfer between 2 images. As we progressed, we upgraded our program so that it can combine several different art styles, and draw the image in those “combined” art style. For visual purposes, we limit the number of art styles to be 4 art images.</p>

                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Data</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>We use any random images.</p>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>The inputs requirements are:</p>
                            <ul style={{fontFamily: `'Karla', sans-serif`}}>
                                <li>1 image for the content image, which is what we will draw. i.e. a picture of bird, doc, etc. </li>
                                <li>At least 1 (max 4) images for the art image(s), which will be our art style. i.e. a painting like starry night, a manga picture, a cartoon, etc.</li>
                            </ul>

                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Setup</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>We mainly use tensorflow for our model. We also use some additional libraries like numpy, time, functools, PIL, IPython, and os.</p>

                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Method</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>We use Neural Style Transfer (NST) algorithm for this project.</p>
                            <ol style={{fontFamily: `'Karla', sans-serif`}}>
                                <li>First, we load the images.</li>
                                <li>Then, to get the content and style of the image, we extract the intermediate layers of the model. The lower layers consist of more general features like edges and textures. The higher layers consist of more detailed features, like eyes, nose, etc. We use a pretrained image classification network VGG19 for our model.</li>
                                <li>The content of the image is represented by the values of the intermediate feature maps. On the other hand, the style image of the image can be calculated by the means and correlations across different feature maps. We use gram matrix to calculate this.</li>
                                <li>Then we get the total loss using regularization for our train step function.</li>
                                <li>Finally, we run an optimization function.</li>
                            </ol>
                        </Container>
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