import {
    SET_FULL_SCREEN_IMAGE,
} from '../actions/types';

const INITIAL_STATE = {
    fullScreenImg: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FULL_SCREEN_IMAGE:
            const fullScreenImg = action.payload
            return {
                fullScreenImg
            }
        default: return state;
    }
}