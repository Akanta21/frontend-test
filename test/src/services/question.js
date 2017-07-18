/* global fetch */
import {
    EP_QUESTIONS,
    EP_POST_QUESTION
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

export function postQ ({token, questionObject}) {
    return fetch(EP_POST_QUESTION, {
        method: 'POST',
        headers: {
            'CONTENT-TYPE': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(questionObject)
    })
}