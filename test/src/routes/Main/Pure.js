import React from 'react'
import styled from 'styled-components'

import LoginForm from './Form' 
import { Error } from '../../components'

const Wrapper = styled.div`
    background-color: #f7f7f7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    overflow-y: scroll;
    width: 100vw;
    height: 100vh;
`

const FormWrapper = styled.div`
    width: 40%;
`

export default props => {
    const { error } = props
    return <Wrapper>
        {error && <Error>{error}&nbsp;</Error>}
        <FormWrapper>
            <LoginForm {...props} />
        </FormWrapper>
    </Wrapper>
}