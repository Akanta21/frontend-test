import React from 'react'
import { Wrapper, InputHolder, Input, ErrorContainer } from './Common'

const renderEmail = props => {
    const {
        input,
        meta: {
            touched,
            error
        }
    } = props

    return <Wrapper>
        <label htmlFor='email'><span>Your Email Address</span></label>
        <InputHolder>
            <Input
                {...input}
                type='email'
                error={touched && error}
                autoComplete='off' />
        </InputHolder>
        <ErrorContainer>{touched && error}&nbsp;</ErrorContainer>
    </Wrapper>
}

export default renderEmail