import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainMenu from "./MainMenu.js";

import ChangeBackgroundColorProject from "./progects/changeBackgroundColorProject.js";
import BackgroundImageSliderProject from "./progects/backgroundImageSliderProject.js";
import FilterJavascriptProject from "./progects/filterJavascriptProject";
import TodoListJavascriptProject from "./progects/todoListJavascriptProject";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainMenu} />
                        <Route path="/changeBackgroundColorProject" component={ChangeBackgroundColorProject} />
                        <Route path="/backgroundImageSliderProject" component={BackgroundImageSliderProject} />
                        <Route path="/filterJavascriptProject" component={FilterJavascriptProject} />
                        <Route path="/todoListJavascriptProject" component={TodoListJavascriptProject} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    };
};

export default App;