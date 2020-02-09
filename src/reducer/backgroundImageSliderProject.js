const rootImg = "/image/image-slider-javascript-project/"
const images = ["contBcg-0.jpg", "contBcg-1.jpg", "contBcg-2.jpg", "contBcg-3.jpg", "contBcg-4.jpg"];

const initialState = {
    images: ["contBcg-0.jpg", "contBcg-1.jpg", "contBcg-2.jpg", "contBcg-3.jpg", "contBcg-4.jpg"],
    rootImg: "/image/image-slider-javascript-project/",
    next: 0,
    prev: 0,
    left: true
};

export default (state = initialState, action) => {
    if (action.type === "CHENGE") {
        if (action.direction === "left") {
            if (state.next === 0) {
                return {
                    ...state,
                    next: state.images.length - 1,
                    prev: state.next,
                    left: true
                };
            } else {
                return {
                    ...state,
                    next: state.next - 1,
                    prev: state.next,
                    left: true
                };
            };
        } else {
            if (state.next === state.images.length - 1) {
                return {
                    ...state,
                    next: 0,
                    prev: state.next,
                    left: false
                };
            } else {
                return {
                    ...state,
                    next: state.next + 1,
                    prev: state.next,
                    left: false
                };
            };
        };
    };

    return state;
};