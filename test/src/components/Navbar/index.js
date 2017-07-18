import { connect } from 'react-redux'
import { get } from 'lodash'
import { push } from 'react-router-redux'

import Pure from './Pure'

const s = state => {
    return state
}

const d = dispatch => ({
    redirect: location => dispatch(push(location))
})

export default connect(s, d)(Pure)