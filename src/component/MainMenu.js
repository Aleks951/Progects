import React from "react";
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
                <a href="/filterJavascriptProject">
                    <img src="/image/filter-javascript-project.png"/>
                    <h3>Filter Javascript Project and Modal and Cart</h3>
                </a>
            </div>
        </div>
    );
};

export default Menu;