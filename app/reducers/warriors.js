import { sampleSize } from 'lodash';
import { RECEIVE_WARRIORS, CHOOSE_OPPONENTS } from '../actions/index.js';

let initialState = {
    allWarriors: [],
    opponent1: null,
    opponent2: null
};

const getRandomWarriors = (warriors) => {
    return sampleSize(warriors, 2);
};

const warriorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_WARRIORS:
            return Object.assign({}, state, { allWarriors: action.warriors });

        case CHOOSE_OPPONENTS:
            let randomWarriors = getRandomWarriors(state.allWarriors);
            return Object.assign({}, state, { opponent1: randomWarriors[0], opponent2: randomWarriors[1] });

        default:
            return state;
    }

};

export default warriorsReducer;