import {login} from '../services/profile'
import {push, go} from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()
export default {
    namespace: 'profile',
    state: {
        a: 'hi'
    },
    reducers: {
        setToken: (state, {payload: token}) => {
            return ({...state, token})
        }
    },
    effects: {
        *login (action, { call, put, navTo }) {
            try {
                const {payload: {email, password}} = action
                const res = yield call(login, {email, password})
                const json = yield res.json()
                const {token} = json

                yield put({type: 'profile/setToken', payload: token})                
            } catch (error) {
                yield put({type: 'profile/setToken', payload: '1'}) 
                yield put(push('/next'))
            }
        }
    }
}