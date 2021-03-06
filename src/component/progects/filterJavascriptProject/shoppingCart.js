import React from "react";
import { connect } from "react-redux";

function ShopingCart(props) {
    let state = props.state;

    if (state.boughtItems.length === 0) {
        return (
            <div id="shoping-cart">
                <h5>Bounght Items</h5>
            </div>
        );
    } else {
        return (
            <div id="shoping-cart">
                <div className="wrap-items">
                    {state.boughtItems.map((item, i) => {
                        return (
                            <div className="item" key={item.id}>
                                <img src={item.img} />
                                <p><span>{item.name}</span>${item.cost}</p>
                                <input
                                    type="number"
                                    value={item.amount}
                                    onChange={(e) => { props.changesAmount(e.target.value, i) }}
                                />
                                <p><span>Sum</span>${item.cost * item.amount}</p>
                                <i onClick={() => props.removeItem(i)} className="fa fa-trash"></i>
                            </div>
                        );
                    })}
                </div>
                <div className="cost">
                    <h5>Total</h5>
                    <h5>${state.sumItems}</h5>
                </div>
                <div className="buttons-options">
                    <button onClick={props.clearCart} className="my-btn">Clear cart</button>
                </div>
            </div>
        );
    };
};

export default connect(
    (state) => ({
        state: state.filterJavascriptProject
    }),
    (dispatch) => ({
        removeItem: (i) => {
            dispatch({ type: "REMOVEITEM", i });
        },
        changesAmount: (e, i) => {
            dispatch({ type: "CHANGESAMOUNT", e, i });
        },
        clearCart: () => {
            dispatch({ type: "CLEARCART" });
        }
    })
)(ShopingCart);