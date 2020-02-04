import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainMenu from "./MainMenu.js";

import ChangeBackgroundColorProject from "./progects/changeBackgroundColorProject.js";
import BackgroundImageSliderProject from "./progects/backgroundImageSliderProject.js";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainMenu} />
                        <Route path="/changeBackgroundColorProject" component={ChangeBackgroundColorProject} />
                        <Route path="/backgroundImageSliderProject" component={BackgroundImageSliderProject} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    };
};

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(App);