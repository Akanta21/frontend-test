/* global fetch */
import {
    EP_QUESTIONS
} from '../endpoints'

export function fetchQ (token) {
    return fetch(EP_QUESTIONS, {
        method: 'GET',
        headers: {
            'CONTENT-TYPE': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}