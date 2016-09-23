import { NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

let initialState = [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case NOTIFY:
            return [...state, { id: action.id, message: action.message, theme: action.theme }];

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