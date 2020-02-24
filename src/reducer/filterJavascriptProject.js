const initialState = {
    items: [],
    groups: [],
    showItem: [],
    boughtItems: [],
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
            let show = [];
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
        let show = [];
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

    // CLOSEMODAL
    if (action.type === "CLOSEMODAL") {
        return {
            ...state,
            modal: false
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
        for (let i = 0; i < state.boughtItems.length; ++i) {
            if (state.boughtItems[i].id === action.id) {
                let amountItems = state.amountItems - state.boughtItems[i].amount;
                let sumItems = state.sumItems - (state.boughtItems[i].cost * state.boughtItems[i].amount);
                let boughtItems = state.boughtItems.length === 1 ? [] : state.boughtItems.splice(i - 1, 1);

                return {
                    ...state,
                    boughtItems,
                    amountItems,
                    sumItems
                };
            };
        };
    };

    // CHANGESAMOUNT
    if (action.type === "CHANGESAMOUNT") {
        for (let i = 0; i < state.boughtItems.length; ++i) {
            if (state.boughtItems[i].id === action.id) {
                let condition = state.boughtItems[i].amount > action.e;

                if (action.e >= 0) {
                    let chenges = {
                        changesSumItems: condition ? -1 * state.boughtItems[i].cost : state.boughtItems[i].cost,
                        chengesAmountItems: condition ? -1 : 1
                    };
                    let boughtItems = state.boughtItems;
                    boughtItems[i].amount = action.e;
    
                    return {
                        ...state,
                        boughtItems,
                        sumItems: state.sumItems + chenges.changesSumItems,
                        amountItems: state.amountItems + chenges.chengesAmountItems
                    };
                } else {
                    return state;
                };
            };
        };
    };

    // CLEARCART
    if (action.type === "CLEARCART") {
        return {
            ...state,
            boughtItems: [],
            sumItems: 0,
            amountItems: 0
        };
    };

    return state;
};