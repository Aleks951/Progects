import React from "react";
import { connect } from "react-redux";

function ShowImage(props) {
    let state = props.state;

    return (
        <React.Fragment>
            {state.showItem.map((item, i) => {
                let style = {
                    transform: "translateX(" + (100 * (i - state.showImg)) + "%)"
                };
                return (
                    <img
                        key={item.id}
                        src={item.img}
                        style={style}
                    />
                );
            })}
        </React.Fragment>
    );
};

function Modal(props) {
    let state = props.state

    return (
        <div className="my-modal">
            <div className="wrap-close-button">
                <i onClick={props.closeModal} className="fa fa-window-close"></i>
            </div>
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

export default connect (
    (state) => ({
        state: state.filterJavascriptProject
    }),
    (dispatch) => ({
        chenge: (direction) => {
            dispatch({ type: "CHANGEIMGMODAL", direction });
        },
        closeModal: () => {
            dispatch({ type: "CLOSEMODAL" });
        }
    })
)(Modal);