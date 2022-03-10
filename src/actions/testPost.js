import axios from 'axios';

import {
    TEST_POST_GET
} from './types';

export function testPostDetails() {
    return({
        type: TEST_POST_GET,
        payload: [
            fetch('http://127.0.0.1:3301/testgetpost')
            .then(response => response.json())
        ]
    })
}