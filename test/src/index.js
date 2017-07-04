import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import AppRouter from './entries/Router'
// to use for caching local assets for faster assets display
import registerServiceWorker from './utils/registerServiceWorker'

import initModels from './utils/initModels'
import profileModel from './models/profile'

const store = initModels([
    profileModel
])

const renderApp = App => render(<Provider store={store}>
    <App store={store} />
</Provider>, document.getElementById('root'))

renderApp(AppRouter)

// ------------------------------------------------------
// config hot reload
module.hot && module.hot.accept('./entries/Router', () => renderApp(AppRouter))
registerServiceWorker()
