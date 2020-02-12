import React from "react";

function AboutAs(props) {
    return (
        <div id="about-as">
            <div>
                <h1 className="h1-black">About <strong>As</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
                <button className="my-btn">Eplore</button>
            </div>
            <div className="about-img__container">
                <img src="/image/filter-javascript-project/sweets-1.jpg" />
            </div>
        </div>
    );
};

export default AboutAs;