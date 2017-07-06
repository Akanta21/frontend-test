import React from 'react'
import styled from 'styled-components'

import QItem from './QItem'

const Wrapper = styled.div`
`

const Label = styled.div`
    font-size: 12px;
    color: #0b934b;
    padding: 15px;
`

const ListHolder = styled.div`
    background-color: #fff;
    border-top: 1px solid #0b934b;
    border-bottom: 1px solid #0b934b;
    padding-left: 25px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.06);

    > div:not(:last-child) {
        border-bottom: 1px solid #0b934b;
    }
`


export default props => {

    const { questions, redirect } = props

    return <Wrapper>
        <div>
            <Label>Questions</Label>
            <ListHolder>{questions.map((q, idx) => <QItem 
                key={idx}
                onClick={() => redirect(`${q._id}`)}
                {...q}>
                </QItem >)}
            </ListHolder>
        </div>
    </Wrapper>
}