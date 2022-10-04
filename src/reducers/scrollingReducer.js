import {
    SET_SCROLLING,
} from '../actions/types';

const initialState = {
    scrolling: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_SCROLLING:
            return {
                ...state,
                scrolling: action.payload
            }
        default:
            return state;
    }
}