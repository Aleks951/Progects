import React from "react";
import { connect } from "react-redux";

function Choice(props) {
    let state = props.state;

    return (
        <div className="choice">
            <div className="first">
                <button key="x" onClick={() => { props.chengeGropup("All") }} className="my-btn">All</button>
                {state.groups.map((group, i) => {
                    return (
                        <button key={i} onClick={() => { props.chengeGropup(group) }} className="my-btn">{group}</button>
                    );
                })}
            </div>
            <div className="second">
                <div>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input onChange={(e) => { props.search(e.target.value) }} placeholder="item..." />
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state.filterJavascriptProject
    }),
    (dispatch) => ({
        chengeGropup: (changes) => {
            dispatch({ type: "CHANGESGROUP", changes });
        },

        search: (e) => {
            dispatch({ type: "SEARCH", e });
        },
    })
)(Choice);