import { sampleSize } from 'lodash';
import { RECEIVE_WARRIORS, CHOOSE_OPONENTS, NOTIFY, NOTIFY_CLEAR } from '../actions/index.js';

let initialState = {
    warriors: [],
    opponent1: null,
    opponent2: null,
    notify: ''
};

const getRandomWarriors = (warriors) => {
    return sampleSize(warriors, 2);
};

const warriorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_WARRIORS:
            return Object.assign({}, state, { warriors: action.warriors });

        case CHOOSE_OPONENTS:
            let randomWarriors = getRandomWarriors(state.warriors);
            return Object.assign({}, state, { opponent1: randomWarriors[0], opponent2: randomWarriors[1] });

        case NOTIFY:
            return Object.assign({}, state, { notify: action.content });

        case NOTIFY_CLEAR:
            return Object.assign({}, state, { notify: '' });

        default:
            return state;
    }

};

export default warriorsReducer;