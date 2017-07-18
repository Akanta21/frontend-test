import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

const Wrapper = styled.div`
    background-color: #ffffff;
    padding: 15px 15px 7px;
    min-height: 48px;
`

const Question = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #676a6c;

    >span {
        color: #2d4aef;
    }
`

const Answer = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #676a6c;
    > span {
        color: #d62f2f;
    }
`

export default props => {
    const question = get(props, 'question_body', '')
    const answer = get(props, 'answer', '')
    return <Wrapper>
        <Question><span>Question:&nbsp;</span> {question}</Question>
        <Answer><span>Answer:&nbsp;</span>{answer}</Answer>
    </Wrapper>
}