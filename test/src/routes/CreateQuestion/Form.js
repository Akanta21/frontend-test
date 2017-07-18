import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import validate from './validate'
import questionField from './Fields'
import Button from '../../components/Button'

let questionForm = props => {
    const { valid, onSubmit, answer, question } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        valid && onSubmit(question, answer)
    }

    return <form onSubmit={handleSubmit}>
        <Field
            name='question'
            label='Question'
            placeholder='Please enter your question!'
            component={questionField} />
        <Field
            name='answer'
            label='Answer'
            placeholder='Please enter your answer!'
            component={questionField} />
        <Button
            type='submit'>
            Submit
        </Button>
    </form>
}

questionForm = reduxForm({
    form: 'questionForm',
    initialValues: {
        question: '',
    },
    validate
})(questionForm)

const selector = formValueSelector('questionForm')

questionForm = connect(
    state => {
        const question = selector(state, 'question')
        const answer = selector(state, 'answer')
        return ({question, answer})
    }
)(questionForm)

export default questionForm