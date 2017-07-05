import React from 'react'
import { Wrapper, InputHolder, Input, ErrorContainer } from './Common'

const renderPassword = props => {
    const {
        input,
        meta: {
            touched,
            error
        }
    } = props

    return <Wrapper>
        <label htmlFor='password'><span>Your Password</span></label>
        <InputHolder>
            <Input
            {...input}
            type='text'
            error={touched && error}
            autoComplete='off' />
        </InputHolder>
        <ErrorContainer>{touched && error}&nbsp;</ErrorContainer>
    </Wrapper>
}

export default renderPassword