import {
    SET_FULL_SCREEN_IMAGE,
} from './types';

export function setFullScreenImg(img) {
    return({
        type: SET_FULL_SCREEN_IMAGE,
        payload: img
    })
}