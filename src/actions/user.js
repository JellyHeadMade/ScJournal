import {
    SET_USER_INFO
} from './types';


export function setUserInfo() {
    return({
        type: SET_USER_INFO,
        payload: [
            {
                savedUserImage: 'http://via.placeholder.com/63',
                savedUserName: 'JellyHeadMade',
                savedUserId: '1'
            },
        ]
    })
}