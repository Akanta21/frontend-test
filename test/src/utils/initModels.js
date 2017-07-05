import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import { each, flatten, merge } from 'lodash'

import createHistory from 'history/createBrowserHistory'
import { reducer as formReducer } from 'redux-form'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import extractModelReducers from './extract-model-reducers'
import extractModelEffects from './extract-model-effects'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

export default function (models) {
    // create saga middleware
    const sagaMiddleware = createSagaMiddleware()

    // reducers and effects
    const reducer = combineModelReducers(models)
    const effects = combineModelEffects(models)

    // Build the middleware for intercepting and dispatching navigation actions
    const middleware = [sagaMiddleware, routerMiddleware(history)]

    // register saga
    let store = createStore(reducer, applyMiddleware(...middleware))

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    store = createStore(reducer, composeEnhancers(
        applyMiddleware(...middleware)
    ))

    sagaMiddleware.run(effects)

    // return redux store
    return store
}

// reducers with models
const combineModelReducers = models => {
    const reducerMap = {}

    each(models, m => {
        reducerMap[m.namespace] = extractModelReducers(m)
    })

    const reducersWithReduxForm = merge(reducerMap, {
        form: formReducer,
        router: routerReducer
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