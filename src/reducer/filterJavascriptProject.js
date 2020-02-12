const initialState = {
    items: [],
    groups: [],
    showItem: []
};

export default (state = initialState, action) => {
    if (action.type === "DB") {
        return {
            ...action.db,
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

    return state;
};