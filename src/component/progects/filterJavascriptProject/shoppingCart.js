import React from "react";
import { connect } from "react-redux";

function ShopingCart(props) {
    let state = props.state;

    return (
        <div id="shoping-cart">
            <div className="wrap-items">
                {state.boughtItems.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <img src={item.img} />
                            <p><span>{item.name}</span>${item.cost}</p>
                            <input
                                type="number"
                                value={item.amount}
                                onChange={(e) => { props.changesAmount(e.target.value, item.id) }}
                            />
                            <p><span>Sum</span>${item.cost * item.amount}</p>
                            <i onClick={() => props.removeItem(item.id)} className="fa fa-trash"></i>
                        </div>
                    );
                })}
            </div>
            <div className="cost">
                <h5>Total</h5>
                <h5>${state.sumItems}</h5>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state.filterJavascriptProject
    }),
    (dispatch) => ({
        removeItem: (id) => {
            dispatch({ type: "REMOVEITEM", id });
        },
        changesAmount: (e, id) => {
            dispatch({ type: "CHANGESAMOUNT", e, id });
        }
    })
)(ShopingCart);