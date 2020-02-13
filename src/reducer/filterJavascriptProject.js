const initialState = {
    items: [],
    groups: [],
    showItem: [],
    modal: false,
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

    return state;
};