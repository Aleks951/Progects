const initialState = {
    backgroundColor: "green"
};

const colors = ["yellow", "green", "blue", "brown", "white", "red", "orange", "pink"];

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
};

export default (state = initialState, action) => {
    if (action.type === "CHENGE") {
        let newColor = randomInteger(0, colors.length);

        return {
            backgroundColor: colors[newColor]
        };
    };

    return state;
};