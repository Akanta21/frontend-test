import { fetchQ } from '../services/question'

export default {
    namespace: 'qBank',
    state: {},
    reducers: {
        setQuestions: (state, {payload: question}) => {
            return ({...state, listOfQuestions: question})
        }
    },
    effects: {
        *fetchQuestions (action, { call, put, navTo }) {
            try {
                const {payload: token} = action
                const res = yield call(fetchQ, token)
                const json = yield res.json()
                const { data } = json
                yield put({type: 'qBank/setQuestions', payload: data})
            } catch (error) {
                console.log(error)
            }
        }
    }
}