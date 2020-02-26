import React from "react";
import { connect } from "react-redux";

function ShowItem(props) {
    let state = props.state;

    return (
        <div className="show-item">
            {state.showItem.map((item, i) => {
                return (
                    <div key={item.id} className="item">
                        <img onClick={() => {props.showModal(i)}} src={item.img} />
                        <div className="wrap">
                            <h5 className="name">{item.name}</h5>
                            <div className="wrap-cost-and-buy">
                                <button onClick={() => {props.buyItem(item)}} className="buy"><i className="fa fa-shopping-cart" aria-hidden="true" /></button>
                                <h5 className="cost">${item.cost}</h5>
                            </div>                            
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default connect(
    (state) => ({
        state: state.filterJavascriptProject
    }),
    (dispatch) => ({
        showModal: (show) => {
            dispatch({ type: "SHOWMODAL", show })
        },

        buyItem: (item) => {
            dispatch({ type: "BUYITEM", item })
        }
    })
)(ShowItem);