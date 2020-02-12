import React from "react";

function Header(props) {
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
                    <button className="shopping-button">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                        2 Items - $10.49
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

export default Header;