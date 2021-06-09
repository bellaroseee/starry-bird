import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, HashRouter, Switch } from "react-router-dom";
import RouterScrollTop from "./RouterScrollTop";
import NavigationBar from "./NavigationBar";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";
import Demo from "./Demo";
import Credits from "./Credits";
import Examples from "./Examples";

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
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/demo" component={Demo}/>
                        <Route exact path="/examples" component={Examples}/>
                        <Route exact path="/credits" component={Credits}/>
                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            </>
        );
    }
}

export default App;
