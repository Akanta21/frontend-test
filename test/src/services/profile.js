/* global fetch */
import {
    EP_LOGIN,
    EP_LOGOUT
} from '../endpoints'

export function login ({email, password}) {
    return fetch(EP_LOGIN, {
        method: 'POST',
        headers: {
            'CONTENT-TYPE': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
}

export function logout (token) {
    return fetch(EP_LOGOUT, {
        method: 'POST',
        headers: {
            'CONTENT-TYPE': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}