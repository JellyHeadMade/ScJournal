import {
    SET_USER_INFO
} from './types';


export function setUserInfo() {
    return({
        type: SET_USER_INFO,
        payload: [
            {
                userImage: 'http://via.placeholder.com/63',
                userName: 'JellyHeadMade',
                userId: '77'
            }
        ]
    })
}