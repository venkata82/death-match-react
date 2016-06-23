import { sampleSize } from 'lodash';
import { RECEIVE_WARRIORS, CHOOSE_OPONENTS } from '../actions/index.js';

let initialState = {
    warriors: [],
    oponent1: null,
    oponent2: null
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
            return Object.assign({}, state, { oponent1: randomWarriors[0], oponent2: randomWarriors[1] });

        default:
            return state;
    }

};

export default warriorsReducer;