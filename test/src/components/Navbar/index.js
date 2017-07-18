import { connect } from 'react-redux'
import { get } from 'lodash'
import { push } from 'react-router-redux'

import Pure from './Pure'

const s = state => {
    const token = get(state, 'profile.token')
    return {token}
}

const d = dispatch => {
    const token = sessionStorage.getItem('token')
    return ({
        redirect: location => dispatch(push(location)),
        logout: () => dispatch({type: 'profile/logout', payload: token})
    })
}

export default connect(s, d)(Pure)