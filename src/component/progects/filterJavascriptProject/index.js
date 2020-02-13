import React from "react";
import { connect } from "react-redux";

import Header from "./header.js";
import AboutAs from "./aboutAs.js";
import Filter from "./filter.js";
import Modal from "./modal.js";
import DB from "./DB.js";

import "../../../scss/filterJavascriptProject.scss";

function App(props) {

    React.useEffect(() => {
        props.initialDB(DB);
    }, []);

    return (
        <React.Fragment>
            <Header />
            <AboutAs />
            <Filter />
            {props.modal ? <Modal /> : null}
        </React.Fragment>
    );
};

export default connect(
    (state) => ({
        modal: state.filterJavascriptProject.modal
    }),
    (dispatch) => ({
        initialDB: (db) => {
            dispatch({ type: "DB", db });
        }
    })
)(App);