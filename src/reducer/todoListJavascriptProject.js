let initialState = {
    textInput: "",
    items: new Array()
};

let idItem = 0;

export default (state = initialState, action) => {

    // TEXTINPUT
    if (action.type === "TEXTINPUT") {
        return {
            ...state,
            textInput: action.text
        };
    };

    // ADDITEM
    if (action.type === "ADDITEM") {
        let newItem = {
            id: idItem,
            toDo: state.textInput,
            completed: false,
            changesItem: false
        };

        ++idItem;

        return {
            ...state,
            textInput: "",
            items: [
                ...state.items,
                newItem
            ]
        };
    };

    // COMPLETED
    if (action.type === "COMPLETED") {
        let items = state.items;
        items[action.i].completed = !items[action.i].completed;

        return {
            ...state,
            items
        };
    };

    // CHANGESITEM
    if (action.type === "CHANGESITEM") {
        let items = state.items;
        if (action.action === "change") {
            items[action.i].changesItem = !items[action.i].changesItem;
        } else if (action.action === "changesText") {
            items[action.i].toDo = action.text;
        };
        return {
            ...state,
            items
        };
    };

    // REMOVEITEM
    if (action.type === "REMOVEITEM") {
        let items = state.items;
        items.splice(action.i, 1);

        return {
            ...state,
            items
        };
    };

    // CLEARALL
    if (action.type === "CLEARALL") {
        return {
            ...state,
            items: new Array()
        };
    };

    return state;
};