import React from "react";
import { connect } from "react-redux";

import "../../scss/changeBackgroundColorProject.scss";

function Change (props) {
    return (
        <div style={props.style} id="container">
            <button onClick={props.chenge} type="button" className="btn btn-primary">Click me!</button>
        </div>
    );
};

export default connect(
    (state) => ({
        style: state.changeBackgroundColorProject
    }),
    (dispatch) => ({
        chenge: () => {
            dispatch({type: "CHENGE"});
        }
    })
)(Change);