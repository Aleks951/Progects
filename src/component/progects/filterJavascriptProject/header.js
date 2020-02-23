import React from "react";
import { connect } from "react-redux";

function Header(props) {
    let state = props.state;

    return (
        <header>
            <nav>
                <a className="logo" href="#"><img src="/image/filter-javascript-project/logo.svg" alt="" /></a>
                <div className="center">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Store</a>
                </div>
                <div className="end">
                    <a>
                        <i className="fa fa-phone" aria-hidden="true" />
                        + 123 456 789
                    </a>
                    <button onClick={props.showCart} className="shopping-button">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                        {state.amountItems} Items - ${state.sumItems}
                    </button>
                </div>
            </nav>
            {/* end nav */}
            <div className="back">
                <div>
                    <h1>Welcome to <strong>Grandma's</strong></h1>
                    <button className="my-btn">Explore</button>
                </div>
            </div>
        </header>
    );
};

export default connect(
    (state) => ({
        state: state.filterJavascriptProject
    }),
    (dispatch) => ({
        showCart: () => {
            dispatch({ type: "SHOWSHOPPINGCART" });
        }
    })
)(Header);