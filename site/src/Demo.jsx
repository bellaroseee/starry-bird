import axios from 'axios';
import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Button, Carousel, Spinner} from 'react-bootstrap';
import Dropzone from 'react-dropzone';

class Demo extends Component {

    state = {
        selectedBaseImage: null,
        selectedStyleImages: [],
        outputImage: null,
        resultPending: false
    };

    stylesThumb = null;
    baseThumb = null;
    currentPromises = [];

    onBaseDrop = (acceptedFileArray) => {
        let acceptedFile = acceptedFileArray[0];
        Object.assign(acceptedFile, {preview: URL.createObjectURL(acceptedFile)})
        this.baseThumb = (
            <div className="thumb">
                <Container className="thumb-inner justify-content-center">
                    <img
                        src={acceptedFile.preview}
                        className="img"
                        alt={acceptedFile.name}
                    />
                </Container>
            </div>);
        this.setState({
            selectedBaseImage: acceptedFile
        });
    };

    onStylesDrop = (acceptedFileArray) => {
        acceptedFileArray = acceptedFileArray.map(file => Object.assign(file, {preview: URL.createObjectURL(file)}));
        this.stylesThumb = acceptedFileArray.map(file => (
            <Carousel.Item>
                <div className="thumb" key={file.name}>
                    <div className="thumb-inner justify-content-center">
                        <img
                            src={file.preview}
                            className="img"
                            alt={file.name}
                        />
                    </div>
                </div>
            </Carousel.Item>));
        this.stylesThumb = <Carousel prevIcon={null} nextIcon={null}> {this.stylesThumb} </Carousel>
        this.setState({
            selectedStyleImages: acceptedFileArray
        });
    };

    clearBaseImage = () => {
        this.setState({
            selectedBaseImage: null,
            outputImage: null
        });
        this.baseThumb = null
    }

    clearStyleImages = () => {
        this.setState({
            selectedStyleImages: [],
            outputImage: null
        });
        this.stylesThumb = null
    }

    // On file upload (click the upload button)
    uploadFile = (file) => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            file,
            file.name
        );

        let config = {
            headers: {
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,",
                "Access-Control-Allow-Credentials": "true"
            }
        }

        // Details of the uploaded file
        console.log(file);

        // Request made to the backend api
        // Send formData object
        this.currentPromises.push(axios.post("http://localhost:5000/api/upload", formData, config)
            .then(res => {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
                alert("There was an error in your request");
            }));
        };

    sendNSTRequest = async () => {
        if (this.state.selectedBaseImage === null) {
            alert("Hey! You forgot to select a base image");
            return;
        }
        if (this.state.selectedStyleImages === undefined || this.state.selectedStyleImages.length === 0) {
            alert("The style images are empty. You gotta put something there!");
            return;
        }
        this.setState({resultPending: true});
        this.uploadFile(this.state.selectedBaseImage);
        for (let styles of this.state.selectedStyleImages) {
            this.uploadFile(styles);
        }

        Promise.all(this.currentPromises).then( () => {
            this.currentPromises = [];
            let config = {
                headers: {
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,",
                    "Access-Control-Allow-Credentials": "true"
                }
            };

            axios.post("http://localhost:5000/api/nst", {
                "base_image": this.state.selectedBaseImage.name,
                "style_images": this.state.selectedStyleImages.map(files => files.name)
            }, config)
                .then(res => {
                    var bytestring = res.data['image']
                    var image = bytestring.split('\'')[1];
                    var source = 'data:image/jpeg;base64,' + image;
                    this.setState({
                        resultPending: false,
                        outputImage:
                            <div className="thumb">
                                <Container className="thumb-inner justify-content-center">
                                    <img
                                        src={source}
                                        className="img"
                                        alt={"Stylized Image"}
                                    />
                                </Container>
                            </div>
                    });
                    // console.log(res);
                })
                .catch(res => {
                    console.log(res);
                    alert("There was an error in your request");
                    this.setState(({
                        resultPending: false
                    }));
                });
        });
    }

  render() {
    return (
        <>
            <Jumbotron fluid>
                <Container className="text-center">
                    <h1>Try it out!</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Container>
            </Jumbotron>
            <Container style={{marginBottom: "3em"}} fluid>
                <Row>
                    <Col>
                        <Container className="text-center">
                            <h1>Original Image</h1>
                            <h3>Select or Drag & Drop</h3>
                            {this.state.selectedBaseImage !== null ? null :
                            <Dropzone maxFiles={1} multiple={false} accept={'image/*'} onDropAccepted={this.onBaseDrop} onDropRejected={() => alert("Please only a single image file!")}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <Container {...getRootProps()} className="dropzone">
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </Container>
                                    </section>
                                )}
                            </Dropzone>}
                            <aside className="thumbs-container">
                                {this.baseThumb}
                            </aside>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="text-center">
                            <h1>Style Images</h1>
                            <h3>Select or Drag & Drop (max 4 filters)</h3>
                            {this.state.selectedStyleImages === undefined || this.state.selectedStyleImages.length === 0 ?
                                <Dropzone maxFiles={4} accept={'image/*'} onDropAccepted={this.onStylesDrop} onDropRejected={() => alert("Please select 4 images only!")}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <Container {...getRootProps()} className="dropzone">
                                                <input {...getInputProps()} />
                                                <p>Drag 'n' drop some files here, or click to select files</p>
                                            </Container>
                                        </section>
                                    )}
                                </Dropzone> : null}
                            <aside className="thumbs-container">
                                {this.stylesThumb}
                            </aside>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.state.selectedBaseImage === null ? null :
                        <Container className="text-center justify-content-center" style={{marginTop: "1em"}}>
                            <Button variant="dark" onClick={this.clearBaseImage}>
                                Clear Image
                            </Button>
                        </Container>}
                    </Col>
                    <Col>
                        {this.state.selectedStyleImages === undefined || this.state.selectedStyleImages.length === 0 ? null :
                            <Container className="text-center justify-content-center" style={{marginTop: "1em"}}>
                                <Button variant="dark" onClick={this.clearStyleImages}>
                                    Clear Images
                                </Button>
                            </Container>}
                    </Col>
                </Row>
                <Row>
                    <Container className="text-center justify-content-center" style={{marginTop: "1em"}}>
                        {this.state.outputImage && <h1>Output Image</h1>}
                        {this.state.outputImage}
                    </Container>
                </Row>
                <Row>
                    <Container className="text-center justify-content-center" style={{marginTop: "1em"}}>
                        {this.state.resultPending ? <Spinner animation="border" variant="dark" /> : <Button onClick={this.sendNSTRequest}> NSTify it! </Button>}
                    </Container>
                </Row>
            </Container>
        </>
    );
  }
}

export default Demo;