import React from "react";
import { connect } from "react-redux";

import "../../scss/backgroundImageSliderProject.scss";

let render = true;

function ShowImage(props) {
    let state = props.state;

    if (state.next === state.prev) {
        return (
            <React.Fragment>
                <img src={state.rootImg + state.images[state.next]} />
                <img />
            </React.Fragment>
        );
    };

    if (render) {
        render = false;
        return (
            <React.Fragment>
                <img className="prev" src={state.rootImg + state.images[state.prev]} style={state.left ? { transform: "translateX(-100%)" } : { transform: "translateX(100%)" }} />
                <img className={state.left ? "next-left" : "next-right"} src={state.rootImg + state.images[state.next]} style={state.left ? { transform: "translateX(-100%)" } : { transform: "translateX(100%)" }} />
            </React.Fragment>
        );
    } else {
        render = true;
        return (
            <React.Fragment>
                <img className={state.left ? "next-left" : "next-right"} src={state.rootImg + state.images[state.next]} style={state.left ? { transform: "translateX(-100%)" } : { transform: "translateX(100%)" }} />
                <img className="prev" src={state.rootImg + state.images[state.prev]} style={state.left ? { transform: "translateX(-100%)" } : { transform: "translateX(100%)" }} />
            </React.Fragment>
        );
    };
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