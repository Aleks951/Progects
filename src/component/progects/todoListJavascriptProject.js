import React from "react";
import { connect } from "react-redux";

import "../../scss/todoListJavascriptProject.scss";

function Item(props) {
    let item = props.item;

    return (
        <div className="item my-3">
            <h5 className={item.completed ? "completed" : null}>{item.toDo}</h5>
            <div className="wrap-icons">
                <i onClick={() => { props.completed(props.i) }} className="fa fa-check-circle" aria-hidden="true" />
                <i onClick={() => { props.changesItem(props.i, "change") }} className="fa fa-pencil-square-o" aria-hidden="true" />
                <i onClick={() => {props.removeItem(props.i)}} className="fa fa-times-circle" aria-hidden="true" />
            </div>
        </div>
    );
};

function EbitItem(props) {
    let item = props.item;

    return (
        <div className="item my-3">
            <input onChange={(e) => { props.changesItem(props.i, "changesText", e.target.value) }} type="text" value={item.toDo} />
            <button onClick={() => { props.changesItem(props.i, "save") }} className="btn btn-outline-success text-capitalize">Save</button>
        </div>
    );
};

function App(props) {
    let state = props.state;

    return (
        <div id="todoListJavascriptProject">
            <div className="container">
                <div className="row">
                    <div className="col mx-auto col-md-8 mt-3 text-center">
                        <div className="my-3">
                            <h3 className="text-capitalize mb-4">to do list</h3>
                            <div className="input-group">
                                <input type="text" onChange={(e) => { props.changesText(e.target.value) }} value={state.textInput} className="form-control text-capitalize" placeholder="name..." />
                                <div className="input-group-append">
                                    <button onClick={props.addToDo} className="btn btn-outline-success text-capitalize">add item</button>
                                </div>
                            </div>
                        </div>
                        {/* end form */}
                        <div className="item-container">
                            <div className="item-list my-5">
                                {state.items.map((item, i) => {
                                    return (
                                        <React.Fragment>
                                            {item.changesItem ?
                                                <EbitItem
                                                    key={item.id}
                                                    item={item}
                                                    i={i}
                                                    changesItem={props.changesItem}
                                                /> :
                                                <Item
                                                    key={item.id}
                                                    item={item}
                                                    i={i}
                                                    changesItem={props.changesItem}
                                                    completed={props.completed}
                                                    removeItem={props.removeItem}
                                                />}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                            <button onClick={props.clearAll} type="button" className="btn btn-outline-success my-3 text-capitalize" id="clear-list">clear items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state.todoListJavascriptProject
    }),
    (dispatch) => ({
        changesText: (text) => {
            dispatch({ type: "TEXTINPUT", text });
        },
        addToDo: () => {
            dispatch({ type: "ADDITEM" });
        },
        completed: (i) => {
            dispatch({ type: "COMPLETED", i });
        },
        changesItem: (i, action, text) => {
            dispatch({ type: "CHANGESITEM", i, action, text });
        },
        removeItem: (i) => {
            dispatch({ type: "REMOVEITEM", i });
        },
        clearAll: () => {
            dispatch({ type: "CLEARALL" });
        }
    })
)(App);