import React from 'react'
import { Wrapper, InputHolder, Input, ErrorContainer } from './Common'

const renderEmail = props => {
    const {
        label,
        placeholder,
        input,
        meta: {
            touched,
            error
        }
    } = props

    return <Wrapper>
        <label htmlFor={label}><span>{label}</span></label>
        <InputHolder>
            <Input
                {...input}
                type={label}
                placeholder={placeholder}
                error={touched && error}
                autoComplete='off' />
        </InputHolder>
        <ErrorContainer>{touched && error}&nbsp;</ErrorContainer>
    </Wrapper>
}

export default renderEmail