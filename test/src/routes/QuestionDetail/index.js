import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import { get, find } from 'lodash'

import Pure from './Pure'
import searchParams from '../../utils/searchParams'
// mocking
import mockState from '../../mock-state'

const s = state => {
    const thisState = mockState(state)

    const listOfQuestions = get(thisState, 'qBank.listOfQuestions', [])
    const route = get(thisState, 'router.location.search', '')
    const _id = searchParams(route, 'referenceId')

    return {
        question: find(listOfQuestions, {_id})
    }
}

// const d = dispatch => ({

// })

export default connect(s) (Pure)