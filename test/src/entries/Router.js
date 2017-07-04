import React from 'react'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'

const AppRouter = props => {
    const { store } = props
    console.log(store)
    // Create a history of your choosing (we're using a browser history in this case)
    const history = createHistory()

    return <div>
        <ConnectedRouter history={history}>
            <Route path='/' component={App} />
        </ConnectedRouter>
    </div>
}

export default AppRouter