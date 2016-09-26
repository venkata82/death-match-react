import { NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

let initialState = [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case NOTIFY:
            return [...state, { id: action.id, message: action.message, theme: action.theme, autoDismissTimeout: action.autoDismissTimeout }];

        case NOTIFY_CLEAR:
            // TODO: make sure that the filter is truly pure
            return state.filter((notification) => {
                return notification.id !== action.id;
            });

        default:
            return state;
    }

};

export default reducer;