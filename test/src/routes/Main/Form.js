import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import validate from './validate'
import renderEmail from './Fields/Email'
import renderPassword from './Fields/Password'
import Button from '../../components/Button'

let loginForm = props => {
    const { valid, onSubmit, password, email } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        valid && onSubmit(email, password)
    }

    return <form onSubmit={handleSubmit}>
        <Field
            name='email'
            component={renderEmail} />
        <Field
            name='password'
            component={renderPassword} />
        <Button
            type='submit'>
            Login
        </Button>
    </form>
}

loginForm = reduxForm({
    form: 'loginForm',
    initialValues: {
        email: '',
    },
    validate
})(loginForm)

const selector = formValueSelector('loginForm')

loginForm = connect(
    state => {
        const email = selector(state, 'email')
        const password = selector(state, 'password')
        return ({email, password})
    }
)(loginForm)

export default loginForm