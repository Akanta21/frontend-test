import { put, call, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import each from 'lodash/each'

export default function ({
    namespace,
    effects,
    watchers = []
}) {
    each(effects, (v, k) => {
        function* effectFunction (action) {
            yield v(action, {put, call, navTo: push})
        }

        function* watcher () {
            yield takeEvery(`${namespace}/${k}`, effectFunction)
        }

        watchers.push(watcher())
    })

    return watchers
}