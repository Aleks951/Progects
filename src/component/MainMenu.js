import React from "react";
import { connect } from "react-redux";

import "../scss/mainMenu.scss";

function Menu (props) {
    return (
        <div id="main-menu">
            <div className="wrap">
                <a href="/changeBackgroundColorProject">
                    <img src="/image/change-backgound-color-project-768x768.png"/>
                    <h3>Change Background Color Project</h3>
                </a>
                <a href="/backgroundImageSliderProject">
                    <img src="/image/image-slider-javascript-project.png"/>
                    <h3>Background Image Slider Project</h3>
                </a>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({}),
    (dispatch) => {{}}
)(Menu);