import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    min-height: 50px;
`

const LeftCol = styled.div`
    flex: 0 0 20%;
`

const RightCol = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 0 0 80%;
    text-align: right;
`

const Item = styled.div`
    padding: 0 10px;
`

export default (props) => {
    const {redirect} = props
    return <Wrapper>
        <LeftCol>TenofTen Logo</LeftCol>
        <RightCol>
            <Item onClick={()=> redirect('/') }>Login</Item>
            <Item onClick={()=> redirect('/dashboard') }>Listing</Item>
            <Item onClick={() => redirect('/createquestion')}>Submit a Question</Item>
        </RightCol>
    </Wrapper>
}