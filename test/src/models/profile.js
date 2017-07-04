import {login} from '../services/profile'

export default {
    namespace: 'profile',
    state: {
        a: 'hi'
    },
    reducers: {
        setLoginStatus: (state, {payload: loginStatus}) => {
            return ({...state, loginStatus})
        }
    },
    effects: {
        *login (action, { call, put, navTo }) {
            yield put({type: 'profile/set', payload: {loginStatus: 'login'}})
            try {
                const {payload: {email, password}} = action
                const res = yield call(login, {email, password})
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }
}