import { handleActions } from 'redux-actions'
import mapKeys from 'lodash/mapKeys'

export default function ({
    namespace,
    state,
    reducers = {}
}) {
    const namespacedReducers = mapKeys(reducers, (v, k) => {
        return `${namespace}/${k}`
    })

    return handleActions(namespacedReducers, state)
}