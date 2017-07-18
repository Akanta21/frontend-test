import { fetchQ, postQ } from '../services/question'
import {push} from 'react-router-redux'

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
        },
        *postQuestion (action, { call, put, navTo }) {
            try {
                const {payload} = action
                const questionObject = {
                    question: [
                        {
                            question_body: payload.question,
                            answer: payload.answer
                        }
                    ]
                }
                const res = yield call(postQ, {token: payload.token, questionObject})
                const {status} = res

                if (status === 200) {
                    yield put({type: 'qBank/fetchQuestions', payload: payload.token})
                    yield put(push('/dashboard'))     
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}