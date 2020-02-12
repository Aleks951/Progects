import React from "react";
import { connect } from "react-redux";

function ShowItem(props) {
    let state = props.state;

    return (
        <div className="show-item">
            {state.showItem.map((item) => {
                return (
                    <div key={item.id} className="item">
                        <img src={item.img} />
                        <div>
                            <h5 className="name">{item.name}</h5>
                            <h5 className="cost">${item.cost}</h5>
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
    })
)(ShowItem);

// import React from "react";
// import { connect } from "react-redux";

// import DB from "./DB.js";

// function Choice(props) {
//     let state = props.state;

//     return (
//         <div className="choice">
//             <div className="first">
//                 <button onClick={() => {props.chengeGropup("All")}} className="my-btn">All</button>
//                 {state.groups.map((group) => {
//                     return (
//                         <button onClick={() => {props.chengeGropup(group)}} className="my-btn">{group}</button>
//                     );
//                 })}
//             </div>
//             <div className="second">
//                 <div>
//                     <i class="fa fa-search" aria-hidden="true"></i>
//                     <input placeholder="item..." />
//                 </div>
//             </div>
//         </div>
//     );
// };

// function ShowItem(props) {
//     let state = props.state;

//     return (
//         <div className="show-item">
//             {state.showItem.map((item) => {
//                 return (
//                     <div key={item.id} className="item">
//                         <img src={item.img} />
//                         <div>
//                             <h5 className="name">{item.name}</h5>
//                             <h5 className="cost">${item.cost}</h5>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// function Filter(props) {
//     let state = props.state;

//     React.useEffect(() => {
//         props.initialDB(DB);
//     });

//     return (
//         <div id="filter">
//             <div className="wrap">
//                 <h1 className="h1-black">Our <strong>Store</strong></h1>
//                 <Choice state={state} chengeGropup={props.chengeGropup} />
//                 <ShowItem state={state} />
//             </div>
//         </div>
//     );
// }

// export default connect(
//     (state) => ({
//         state: state.filterJavascriptProject
//     }),
//     (dispatch) => ({
//         initialDB: (db) => {
//             dispatch({ type: "DB", db });
//         },

//         chengeGropup: (changes) => {
//             dispatch({ type: "CHANGESGROUP", changes });
//         },
//     })
// )(Filter);