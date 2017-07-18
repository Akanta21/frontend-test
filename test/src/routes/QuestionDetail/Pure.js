import React from 'react'
import styled from 'styled-components'
import { get, startCase } from 'lodash'

import Detail from './Detail'

const Wrapper = styled.div`
    background-color: #f3f3f4;
    min-height: 973px;
    padding: 50px 0;
`

const Header = styled.div`
    background-color: #ffffff;
    border-top: 0;
    padding: 20px;
`

const Label = styled.div`
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-top: 10px;
    font-size: 26px;
    color: #6b6060;

    > span {
        color: black;
    }
`

const Details = styled.div`
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-top: 4px;
    font-size: 20px;
    color: #6b6060;

    > span {
        color: black;
    }
`

const Body = styled.div`
    padding: 15px;
`

export default props => {
    const { question } = props
    const level = get(question, 'level')
    const q = get(question, 'question', [])
    const marks = get(question, 'mark')

    return <Wrapper>
        <Header>
            <Label>Question for: <span>{startCase(level)}</span></Label>
            <Details>Marks: <span>{marks}</span></Details>
        </Header>
        <Body>{q.map((line, idx) => <Detail key={idx} {...line} />)}</Body>
    </Wrapper>
}