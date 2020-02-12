import React from "react";

import Choice from "./choice.js";
import ShowItem from "./showItem.js";

function Filter(props) {

    return (
        <div id="filter">
            <div className="wrap">
                <h1 className="h1-black">Our <strong>Store</strong></h1>
                <Choice />
                <ShowItem />
            </div>
        </div>
    );
};

export default Filter;