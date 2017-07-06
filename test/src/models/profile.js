import {login} from '../services/profile'
import {push} from 'react-router-redux'

export default {
    namespace: 'profile',
    state: {},
    reducers: {
        setToken: (state, {payload: token}) => {
            return ({...state, token})
        },
        setError: (state, {payload: error}) => {
            return ({...state, error})
        }
    },
    effects: {
        *login (action, { call, put, navTo }) {
            yield put({type: 'profile/setError'})
            try {
                const {payload: {email, password}} = action
                const res = yield call(login, {email, password})
                const { status } = res
                const json = yield res.json()
                if (status === 200) {
                    const {token} = json
                    yield put({type: 'profile/setToken', payload: token})   
                    yield put(push('/next'))   
                } else {
                    yield put({type: 'profile/setError', payload: 'Invalid Login Credentials'})
                }          
            } catch (error) {
                yield put({type: 'profile/setError', payload: 'Unable to login'})
            }
        }
    }
}