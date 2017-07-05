import React from 'react'
import styled from 'styled-components'

import LoginForm from './Form' 

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
    width: 30%;
`

export default props => {

    const {toList} = props

    return <Wrapper>
        <FormWrapper>
            <LoginForm {...props} />
        </FormWrapper>
    </Wrapper>
}