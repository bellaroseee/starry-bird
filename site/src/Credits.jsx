import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

function Credits() {
    return (
        <Container className="justify-content-center" style={{marginTop: "3em"}}>
            <div className="text-center">
                <h2> Team & Credits </h2>
                <br/>
            </div>
            <Col lg={10} style={{fontFamily: `'Karla', sans-serif`}}>
                <Row>
                    <Col sm={{span: 5, offset: 3}}>
                        <div id="team">
                            <h3><u>Team Members</u></h3>
                            <div>
                                <h5><SocialIcon url="https://github.com/bellaroseee" target="_blank" bgColor="#c70000"/> &nbsp; Bella Rose  </h5>
                            </div>
                            <br/>
                            <div>
                                <h5><SocialIcon url="https://github.com/glawrenc" target="_blank" bgColor="#c7c700"/> &nbsp;Gabrielle Lawrencia </h5>
                            </div>
                            <br/>
                            <div>
                                <h5><SocialIcon url="https://github.com/jovancchandra" target="_blank" bgColor="#00c700"/> &nbsp;Jovan Charis Chandra </h5>
                            </div>
                            <br/>
                            <div>
                                <h5><SocialIcon url="https://github.com/Kapporing" target="_blank" bgColor="#0000c7"/> &nbsp; Ronald William Widjaja </h5>
                            </div>

                        </div>
                        <hr/>
                        <div id="resources">
                            <h3><u>Resources</u></h3>
                            <br/>
                            <ul style={{fontSize: "1.25em"}}>
                                <li>
                                    <a href="https://colab.research.google.com/" target="_blank">
                                        Google Colab
                                    </a>
                                </li>
                                <li>
                                    <a href="https://en.wikipedia.org/wiki/Neural_Style_Transfer" target="_blank">
                                        Neural Style Transfer Definition
                                    </a>
                                </li>
                                <li>
                                    <a href="https://towardsdatascience.com/light-on-math-machine-learning-intuitive-guide-to-neural-style-transfer-ef88e46697ee" target="_blank">
                                        NST with TensorFlow
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div id="frameworks">
                            <h3><u>Frameworks</u></h3>
                            <h4>Front-End</h4>
                            <ul>
                                <li>
                                    <a href="https://react-bootstrap.github.io/">
                                        React-Bootstrap
                                    </a>
                                </li>
                                <li>
                                    <a href="https://react-dropzone.js.org/">
                                        React-Dropzone
                                    </a>
                                </li>
                                <li>
                                    <a href="https://reactrouter.com/">
                                        React-Router
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.react-reveal.com/">
                                        React-Reveal
                                    </a>
                                </li>
                            </ul>
                            <h4>Back-End</h4>
                            <ul>
                                <li>
                                    <a href="https://arxiv.org/abs/1409.1556">
                                        VGG-19
                                    </a>
                                </li>
                                <li>
                                    <a href="https://arxiv.org/abs/1508.06576">
                                        NST Paper
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                        <div id="pictures">
                            <h3><u>Pictures and Icons</u></h3>
                            <div>
                                <ul>
                                    <li>Google Images</li>
                                    <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}

export default Credits;