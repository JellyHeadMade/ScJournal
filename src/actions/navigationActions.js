import {
    SET_PAGE
} from '../actions/types';

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: page
    }
}