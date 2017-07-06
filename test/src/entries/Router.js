import React from 'react'

import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import Main from '../routes/Main'
import Dashboard from '../routes/Dashboard'
import QuestionDetail from '../routes/QuestionDetail'

const AppRouter = () => {
    return <div>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/question/detail' component={QuestionDetail} />
        </Switch>
    </div>
}

export default AppRouter