import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import './index.css'
import AppRouter from './entries/Router'
// to use for caching local assets for faster assets display
import registerServiceWorker from './utils/registerServiceWorker'

import initModels, { history } from './utils/initModels'
import profileModel from './models/profile'
import questionModel from './models/question'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = initModels([
    profileModel,
    questionModel
])

const token = sessionStorage.getItem('token')

if (token) {
    store.dispatch({type: 'qBank/fetchQuestions', payload: token})
}


const renderApp = App => render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, document.getElementById('root'))

renderApp(AppRouter)

// ------------------------------------------------------
// config hot reload
module.hot && module.hot.accept('./entries/Router', () => renderApp(AppRouter))
registerServiceWorker()
