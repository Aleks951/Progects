import React from "react";
import { connect } from "react-redux";

import "../../scss/backgroundImageSliderProject.scss";

function ShowImage(props) {
    let state = props.state;

    return (
        <React.Fragment>
            {state.images.map((src, i) => {
                let style = {
                    transform: "translateX(" + (100 * (i - state.show)) + "%)"
                };
                return (
                    <img
                        key={i}
                        src={state.rootImg + src}
                        style={style}
                    />
                );
            })}
        </React.Fragment>
    );
};

function Change(props) {
    let state = props.state;

    return (
        <div id="container">
            <div className="wrap-slider">
                <div className="slider">
                    <ShowImage state={state} />
                </div>
                <button
                    type="button"
                    className="btn dropdown-toggle left"
                    onClick={() => { props.chenge("left") }}
                ></button>
                <button
                    type="button"
                    className="btn dropdown-toggle right"
                    onClick={() => { props.chenge("right") }}
                ></button>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state.backgroundImageSliderProject
    }),
    (dispatch) => ({
        chenge: (direction) => {
            dispatch({ type: "CHENGE", direction });
        }
    })
)(Change);