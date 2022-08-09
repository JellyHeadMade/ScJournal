import {
    SET_POST_DETAILS
} from '../actions/types';

const INITIAL_STATE = {
    posts: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_POST_DETAILS:
            const posts = action.payload;
            return {
                ...state,
                posts
            }
        default: return state;
    }
}