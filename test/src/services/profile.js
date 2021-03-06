/* global fetch */
import {
    EP_LOGIN
} from '../endpoints'

export function login ({email, password}) {
    console.log(JSON.stringify({email, password}))
    return fetch(EP_LOGIN, {
        method: 'POST',
        headers: {
            'CONTENT-TYPE': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
}