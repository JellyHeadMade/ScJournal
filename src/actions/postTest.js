import axios from 'axios';
import {
    SET_POST_DETAILS
} from './types';

export const setPostDetails = () => async dispatch => {
        const res = await axios.get('https://scjournalapiv2.herokuapp.com/getallpost')
        dispatch( {
            type: SET_POST_DETAILS,
            payload: res.data
        })
}