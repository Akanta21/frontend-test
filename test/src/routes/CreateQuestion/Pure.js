import React from 'react'
import styled from 'styled-components'

import QuestionForm from './Form'

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
    width: 50%;
`

const CreateQuestion = (props) => {
    return <Wrapper>
        <FormWrapper>
            <QuestionForm {...props} />
        </FormWrapper>
    </Wrapper>
}

export default CreateQuestion