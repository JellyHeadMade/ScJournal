import {
    SET_USER_INFO
} from '../actions/types';

const INITIAL_STATE = {
    usersStuff: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_USER_INFO:
            const usersStuff = action.payload
            return {
                usersStuff
            }
        default: return state;
    }
}