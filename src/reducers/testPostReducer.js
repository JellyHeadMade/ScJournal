import {
    TEST_POST_GET
} from '../actions/types';

const INITIAL_STATE = {
    posts: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case TEST_POST_GET:
            const posts = action.payload;
            return {
                ...state,
                posts
            }
        default: return state;
    }
}