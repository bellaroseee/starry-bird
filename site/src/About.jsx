import React from 'react';
import {Row, Container, Tabs, Tab, Jumbotron} from "react-bootstrap";
import "./About.css"
import recording from './video/455video.mp4';

function About() {

    return (
        <>
            <Container className="float-lg-left" style={{marginTop: "5em"}} fluid>
                <Tabs defaultActiveKey="motivation" id="uncontrolled-tab" style={{inactiveTintColor: 'green'}}>
                    <Tab eventKey="motivation" title="Motivation" style={{marginTop: "30px"}}>
                        <Container>
                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Motivation</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>
                                Since many people are doing bird classification, we fear of missing out and decided to something inspired by the prize bird doll.
                                We decided to do Neural Style Transfer (NST) on bird and the Starry Night painting (hence the name of this project). 
                                As we progressed, we upgraded our program so that it can combine several different art styles, and draw an image in those “combined” art style.
                                For simplicity's sake, we limit the number of art styles to be 4 art style images.
                            </p>

                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Data</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>
                                Since NST does not require training on data, 
                                we are able to use any random images for the content and style images. 
                            </p>

                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Setup</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>
                            The basic framework we used is <code>Tensorflow</code> and <code>VGG-19</code> Network from <code>keras</code>
                            For the demo, we used <code>ReactJS</code> for the front-end and <code>Flask</code> for the server. 
                            </p>

                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Method</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>
                                Our methodology follows closely the <a href="https://arxiv.org/abs/1508.06576">Neural Algorithm of Artistic Style</a> and
                                this <a href="https://www.tensorflow.org/tutorials/generative/style_transfer">TensorFlow tutorial</a> inspired by the said paper.
                            </p>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>The inputs requirements are:</p>
                            <ul style={{fontFamily: `'Karla', sans-serif`}}>
                                <li>1 image for the content image, which is what we will draw. i.e. a picture of bird, dog, etc. </li>
                                <li>At least 1 (max 4) images for the art image(s), which will be our art style. i.e. a painting like starry night, a manga picture, a cartoon, etc.</li>
                            </ul>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>The steps are:</p>
                            <ol style={{fontFamily: `'Karla', sans-serif`}}>
                                <li>Loading both the style and content images form rgb jpg to an <code>EagerTensor</code> with <code>float</code> between 0 and 1 representing pixel values</li>
                                <li>Extracting the content and style layers of the image, using an extractor initialized with <code>VGG-19</code> layers.
                                The specific content and style layer names we want to extracts are defined earlier. The lower layers captures more accurate pixel information like textures and edges. As such, it captures the content better. In contrast,
                                the higher layers captures the high-level content like the general objects in the image.</li>
                                <li>The content of the image is represented by the values of the intermediate feature maps. 
                                While to obtain the style of an image, we need to take a step further by calculating the means and correlations across different feature maps.
                                We use gram matrix to calculate this.</li>
                                <li>For each step in combining the images, loss is calculated by combining the style loss and content loss. Each of the loss is 
                                calculated between the output (feature map to optimize) and the target (feature map in the combined image).
                                The total weight is then regularized before applied by to the image with the <code>optimizer</code>
                                </li>
                                <li>Training or optimization is done after certain number of epoch is done. Then, the image is converted back to <code>PIL.Image</code> from <code>tensor</code></li>
                            </ol>
                            <h4 style={{fontFamily: "'Fredoka One', cursive"}}>Additional Functionality</h4>
                            <p style={{fontFamily: `'Karla', sans-serif`}}>
                                Mulitiple style images can be combined to be applied to the content image.
                            </p>
                        </Container>
                    </Tab>
                    <Tab eventKey="video" title="Video">
                        <Container className="text-center justify-content-center">
                            <Jumbotron style={{backgroundColor: "hsl(29, 87%, 60%)", marginTop: "2em", borderRadius: "5em"}}>
                                <video width="100%" controls>
                                    <source src={recording} type="video/mp4" />
                                </video>
                            </Jumbotron>
                        </Container>
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