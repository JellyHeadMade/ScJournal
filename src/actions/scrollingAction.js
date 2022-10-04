import {
    SET_SCROLLING,
} from './types';

export function setScrolling(value) {
    return {
        type: SET_SCROLLING,
        payload: value
    }
}