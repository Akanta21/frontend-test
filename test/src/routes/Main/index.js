import { connect } from 'react-redux'
import { get } from 'lodash'
import { push } from 'react-router-redux'

import Pure from './Pure'

const s = state => {
    return {
        token: get(state, 'profile.token')
    }
}

const d = dispatch => {
    return {
        onSubmit: (email, password) => dispatch({type: 'profile/login', payload: {email, password}}),
        toList: () => dispatch(push('/next'))
    }
}

export default connect(s, d)(Pure)