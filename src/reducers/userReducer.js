import {
    SET_USER_INFO
} from '../actions/types';

const INITIAL_STATE = {
    userImage: '',
    userName: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_USER_INFO:
            const userInfo = action.payload
            return {
                ...state,
                userInfo
            }
        default: return state;
    }
}