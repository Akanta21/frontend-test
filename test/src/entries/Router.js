import React from 'react'

import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Main from '../routes/Main'
import Dashboard from '../routes/Dashboard'
import QuestionDetail from '../routes/QuestionDetail'
import CreateQuestion from '../routes/CreateQuestion'

const AppRouter = () => {
    return <div>
         <Navbar /> 
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/question/detail' component={QuestionDetail} />
            <Route exact path='/createquestion' component={CreateQuestion} />
        </Switch>
    </div>
}

export default AppRouter