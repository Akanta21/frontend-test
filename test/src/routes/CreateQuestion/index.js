import { connect } from 'react-redux'
import { get } from 'lodash'
import { push } from 'react-router-redux'

import Pure from './Pure'

const s = state => {
    return {
        token: get(state, 'profile.token'),
        error: get(state, 'profile.error')
    }
}

const d = dispatch => {
    const token = sessionStorage.getItem('token')
    return {
        onSubmit: (question, answer) => dispatch({type: 'qBank/postQuestion', payload: {token, question, answer}})
    }
}

export default connect(s, d)(Pure)