/* global fetch */
import {
    EP_LOGIN
} from '../endpoints'

export function login ({email, password}) {
    return fetch(EP_LOGIN, {
        method: 'POST',
        headers: {
            'CONTENT_TYPE': 'application/json'
        },
        body: JSON.stringify({username: email, password})
    })
}