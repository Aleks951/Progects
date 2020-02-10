const initialState = {
    images: ["contBcg-0.jpg", "contBcg-1.jpg", "contBcg-2.jpg", "contBcg-3.jpg", "contBcg-4.jpg"],
    rootImg: "/image/image-slider-javascript-project/",
    show: 0
};

export default (state = initialState, action) => {
    if (action.type === "CHENGE") {
        if (action.direction === "left") {
            if (state.show === 0) {
                return {
                    ...state,
                    show: state.images.length - 1
                };
            } else {
                return {
                    ...state,
                    show: state.show - 1
                };
            };
        } else {
            if (state.show === state.images.length - 1) {
                return {
                    ...state,
                    show: 0
                };
            } else {
                return {
                    ...state,
                    show: state.show + 1
                };
            };
        };
    };

    return state;
};