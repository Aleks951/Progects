const initialState = {
    items: new Array(),
    groups: new Array(),
    showItem: new Array(),
    boughtItems: new Array(),
    sumItems: 0,
    amountItems: 0,
    modal: false,
    cart: false,
    showImg: 0
};

export default (state = initialState, action) => {
    if (action.type === "DB") {
        return {
            ...state,
            items: action.db.items,
            groups: action.db.groups,
            showItem: action.db.items
        };
    };

    // CHANGESGROUP
    if (action.type === "CHANGESGROUP") {

        if (action.changes === "All") {
            return {
                ...state,
                showItem: state.items
            };
        } else {
            let show = new Array();
            let group = action.changes.toLowerCase().trim();

            for (let i = 0; i < state.items.length; ++i) {
                if (state.items[i].group.toLowerCase().trim() === group) {
                    show.push(state.items[i]);
                };
            };

            return {
                ...state,
                showItem: show
            };
        };
    };

    // SEARCH
    if (action.type === "SEARCH") {
        let show = new Array();
        let text = action.e.toLowerCase().trim();

        for (let i = 0; i < state.items.length; ++i) {
            let nameItem = state.items[i].name.toLowerCase().trim();

            if (nameItem.includes(text)) {
                show.push(state.items[i]);
            };
        };

        return {
            ...state,
            showItem: show
        };
    };

    // SHOWMODAL
    if (action.type === "SHOWMODAL") {
        return {
            ...state,
            modal: true,
            showImg: action.show
        };
    };

    // CLOSEMODAL
    if (action.type === "CLOSEMODAL") {
        return {
            ...state,
            modal: false
        };
    };

    // CHANGEIMGMODAL
    if (action.type === "CHANGEIMGMODAL") {
        if (action.direction === "left") {
            if (state.showImg === 0) {
                return {
                    ...state,
                    showImg: state.showItem.length - 1
                };
            } else {
                return {
                    ...state,
                    showImg: state.showImg - 1
                };
            };
        } else {
            if (state.showImg === state.showItem.length - 1) {
                return {
                    ...state,
                    showImg: 0
                };
            } else {
                return {
                    ...state,
                    showImg: state.showImg + 1
                };
            };
        };
    };

    // SHOWSHOPPINGCART
    if (action.type === "SHOWSHOPPINGCART") {
        return {
            ...state,
            cart: !state.cart
        };
    };

    // BUYITEM
    if (action.type === "BUYITEM") {
        let item = action.item;

        for (let i = 0; i < state.boughtItems.length; ++i) {
            if (state.boughtItems[i].id === item.id) {

                ++state.boughtItems[i].amount;

                return {
                    ...state,
                    sumItems: state.sumItems + item.cost,
                    amountItems: ++state.amountItems
                };
            };
        };

        item.amount = 1;

        return {
            ...state,
            boughtItems: [
                ...state.boughtItems,
                item
            ],
            sumItems: state.sumItems + item.cost,
            amountItems: ++state.amountItems
        };
    };

    // REMOVEITEM
    if (action.type === "REMOVEITEM") {
        let amountItems = state.amountItems - state.boughtItems[action.i].amount;
        let sumItems = state.sumItems - (state.boughtItems[action.i].cost * state.boughtItems[action.i].amount);
        let boughtItems = state.boughtItems.concat();
        boughtItems.splice(action.i, 1);

        return {
            ...state,
            boughtItems,
            amountItems,
            sumItems
        };
    };

    // CHANGESAMOUNT
    if (action.type === "CHANGESAMOUNT") {
        let item = state.boughtItems[action.i];
        let sumItems = state.sumItems + item.cost * (action.e - item.amount);
        let amountItems = state.amountItems + (action.e * 1) - item.amount;
        let boughtItems = state.boughtItems;
        boughtItems[action.i].amount = action.e;

        return {
            ...state,
            boughtItems,
            sumItems,
            amountItems
        };
    };

    // CLEARCART
    if (action.type === "CLEARCART") {
        return {
            ...state,
            boughtItems: new Array(),
            sumItems: 0,
            amountItems: 0
        };
    };

    return state;
};