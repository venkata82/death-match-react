import { NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

let initialState = {
    message: '',
    status: ''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case NOTIFY:
            return Object.assign({}, state, { message: action.message, status: action.status });

        case NOTIFY_CLEAR:
            return Object.assign({}, state, { message: '', status: '' });

        default:
            return state;
    }

};

export default reducer;