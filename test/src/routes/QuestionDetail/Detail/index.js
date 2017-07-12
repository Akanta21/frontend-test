import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

const Wrapper = styled.div`
    background-color: #ffffff;
    padding: 15px 15px 7px;
    min-height: 48px;
    border-color: #e7eaec;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #676a6c;
`

// const QuestionDetail =

export default props => {
    const question = get(props, 'question_body', '')
    return <Wrapper>
        <Header>Question: {question}</Header>
    </Wrapper>
}