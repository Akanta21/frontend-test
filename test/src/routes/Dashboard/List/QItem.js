import React from 'react'
import { get, startCase } from 'lodash'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px 16px 0;
    height: 72px;

    &:last-child {
        border: none;
    }
`

const Column1 = styled.div`
    > div:first-child {
        font-size: 16px;
        color: #001B22;
    }

    > div:last-child {
        font-size: 12px;
        color: #697E85;
        padding-top: 7px;
    }
`

const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const MarkIndicator = styled.div`
    font-size: 20px;
    padding-top: 6px;
`

export default props => {

    const { onClick: handleClick } = props
    const level = get(props, 'level')
    const topic = get(props, 'topic')
    const mark = get(props, 'mark')

    return <Wrapper onClick={handleClick}>
        <Column1>
            <div>Level: {startCase(level)}</div>
            <div>Topic: {startCase(topic)}</div>
        </Column1>

        <Column2>
            <MarkIndicator>Mark Awarded: {mark}</MarkIndicator>
        </Column2>
    </Wrapper>
}