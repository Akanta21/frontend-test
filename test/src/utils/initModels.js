import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import { each, flatten, merge } from 'lodash'

import { routerReducer, routerMiddleware } from 'react-router-redux'

import extractModelReducers from './extract-model-reducers'
import extractModelEffects from './extract-model-effects'

// reducers with models
const combineModelReducers = models => {
    const reducerMap = {}

    each(models, m => {
        reducerMap[m.namespace] = extractModelReducers(m)
    })

    const reducersWithReduxForm = merge(reducerMap, {
        // form: formReducer,
        routing: routerReducer,
    })
    return combineReducers(reducersWithReduxForm)
}

// effects with models
const combineModelEffects = models => {
    const watchers = []

    each(models, m=> {
        watchers.push(extractModelEffects(m))
    })

    const flattenedWatchers = flatten(watchers)
    return function* () { yield flattenedWatchers }
}

export default function (models) {
    // create saga middleware
    const sagaMiddleware = createSagaMiddleware()

    // reducers and effects
    const reducer = combineModelReducers(models)
    const effects = combineModelEffects(models)

    // register saga
    let store = createStore(reducer, applyMiddleware(sagaMiddleware))

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    store = createStore(reducer, composeEnhancers(
        applyMiddleware(sagaMiddleware, routerMiddleware)
    ))

    sagaMiddleware.run(effects)

    // return redux store
    return store
}