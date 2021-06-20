import axios from 'axios';
import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Button, Carousel, Spinner} from 'react-bootstrap';
import Dropzone from 'react-dropzone';

class Demo extends Component {

    state = {
        selectedBaseImage: null,
        selectedStyleImages: [],
        outputImage: null,
        resultPending: false,
        nonLocalServer: ""
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
    uploadFile = (file, url) => {
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

        // Request made to the backend api
        // Send formData object
        this.currentPromises.push(axios.post(url.concat("/api/upload"), formData, config)
            .then(res => {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
                alert("There was an error in your request. Check the README in the repo for help.");
            }));
        };

    isURL = (str) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    }

    sendNSTRequest = async () => {
        if (this.state.selectedBaseImage === null) {
            alert("Hey! You forgot to select a base image");
            return;
        }
        if (this.state.selectedStyleImages === undefined || this.state.selectedStyleImages.length === 0) {
            alert("The style images are empty. You gotta put something there!");
            return;
        }
        if (this.state.nonLocalServer !== ""
            && this.isURL(this.state.nonLocalServer)
            && !this.state.nonLocalServer.endsWith(".ngrok.io/")) {
            alert("ngrok link is not valid!");
            return;
        }

        this.setState({
            resultPending: true,
        });

        let url = this.state.nonLocalServer === "" ? "http://localhost:5000" : this.state.nonLocalServer;
        url = "https://" + (url.replace(/(^\w+:|^)\/\//, ''));

        this.uploadFile(this.state.selectedBaseImage, url);
        for (let styles of this.state.selectedStyleImages) {
            this.uploadFile(styles, url);
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

            axios.post(url.concat("/api/nst"), {
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
                                        alt={"Stylized"}
                                    />
                                </Container>
                            </div>
                    });
                })
                .catch(res => {
                    alert("There was an error in your request");
                    this.setState(({
                        resultPending: false
                    }));
                });
        });
    }

    handleURLChange = (event) => {
        this.setState({nonLocalServer: event.target.value});
    }

  render() {
    return (
        <>
            <Jumbotron style={{backgroundColor: "hsl(29, 87%, 60%)", marginTop: "2em"}}>
                <Container className="text-center">
                    <h1 style={{fontSize: "4.5em", fontFamily: "'Fredoka One', cursive", color: "#ffffff"}}>Try it out!</h1>
                    <p style={{fontSize: "1.5em", fontFamily: "'Karla', sans-serif"}}> Wanna try NST on your own images? Now you can! Simply provide a base image and up to 4 styles to apply the Style Transfer on. </p>
                    <p style={{fontSize: "1em", fontFamily: "'Karla', sans-serif"}}>Not using localhost? Enter the ngrok URL below. Please ensure it's properly formatted before NSTifying it.</p>
                    <p>
                    <Button variant="light" as="a" type="button" href="https://colab.research.google.com/github/bellaroseee/starry-bird/blob/master/gpuServerProxy.ipynb">
                        Get your ngrok url
                    </Button>
                    </p>
                    <input type="text" onChange={this.handleURLChange} value={this.state.nonLocalServer}/>
                </Container>
            </Jumbotron>
            <Container style={{marginBottom: "3em"}} fluid>
                <Row>
                    <Col>
                        <Container className="text-center">
                            <h1 style={{fontFamily: "'Fredoka One', cursive", color: "#fea02f"}}>Original Image</h1>
                            <h3 style={{fontFamily: "'Karla', sans-serif"}}>Select or Drag & Drop</h3>
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
                            <h1 style={{fontFamily: "'Fredoka One', cursive", color: "#fea02f"}}>Style Images</h1>
                            <h3 style={{fontFamily: "'Karla', sans-serif"}}>Select or Drag & Drop (max 4 filters)</h3>
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
                    <Container className="text-center justify-content-center" style={{marginTop: "1em", backgroundColor: "hsl(29, 87%, 60%)"}} fluid>
                        {this.state.outputImage && <h1 style={{fontSize: "4em", fontFamily: "'Fredoka One', cursive", color: "#ffffff"}}>Output Image</h1>}
                        {this.state.outputImage}
                    </Container>
                </Row>
                <Row>
                    <Container className="text-center justify-content-center" style={{marginTop: "1em"}}>
                        {this.state.resultPending ? <Spinner animation="border" variant="dark" /> : <Button variant="warning" onClick={this.sendNSTRequest}> NSTify it! </Button>}
                    </Container>
                </Row>
            </Container>
        </>
    );
  }
}

export default Demo;