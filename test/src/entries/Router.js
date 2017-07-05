import React from 'react'

import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import Main from '../routes/Main'
import Next from '../routes/Next'

const AppRouter = () => {
    return <div>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/next' component={Next} />
        </Switch>
    </div>
}

export default AppRouter