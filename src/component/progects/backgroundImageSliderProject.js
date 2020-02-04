import React from "react";
import { connect } from "react-redux";

import "../../scss/backgroundImageSliderProject.scss";

function Change (props) {
    return (
        <div id="container">
            
        </div>
    );
};

export default connect(
    (state) => ({
        // style: state.backgroundImageSliderProject
    }),
    (dispatch) => ({
        // chenge: () => {
        //     dispatch({type: "CHENGE"});
        // }
    })
)(Change);