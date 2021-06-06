import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, HashRouter, Switch } from "react-router-dom";
import RouterScrollTop from "./RouterScrollTop";
import NavigationBar from "./NavigationBar";
import NotFound from "./NotFound";
import Home from "./Home";
import Demo from "./Demo";
import Examples from "./Examples";
import {Button} from "react-bootstrap";
import {Fade} from 'react-reveal';
import { animateScroll as scroll } from 'react-scroll'

class App extends Component {

    render() {
        return (
            <>
                <HashRouter>
                    <NavigationBar/>
                    <RouterScrollTop/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/demo" component={Demo}/>
                        <Route exact path="/examples" component={Examples}/>
                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
                <Fade bottom>
                    <div className="text-center">
                        <Button variant="outline-success" onClick={() => scroll.scrollTo(0)}> Back To Top </Button>
                    </div>
                </Fade>
            </>
        );
    }
}

export default App;
