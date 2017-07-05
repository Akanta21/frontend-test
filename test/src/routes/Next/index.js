import { connect } from 'react-redux'
import { get } from 'lodash'

import Pure from './Pure'

const s = state => {
    return {
        login: get(state, 'profile')
    }
}

const d = dispatch => {
    return {
        onSubmit: (email, password) => dispatch({type: 'profile/login', payload: {email, password}})
    }
}

export default connect(s, d)(Pure)