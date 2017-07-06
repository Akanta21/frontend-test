import { connect } from 'react-redux'
import { get } from 'lodash'
import { push } from 'react-router-redux'

import Pure from './Pure'

// mocking
import mockState from '../../../mock-state'

const s = state => {
    const thisState = mockState(state)

    return {
        questions: get(thisState, 'qBank.listOfQuestions', [])
    }
}

const d = dispatch => ({
    redirect: id => dispatch(push(`/question/detail?referenceId=${id}`))
})

export default connect(s, d)(Pure)