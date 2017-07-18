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

const HiddenCol = styled.div`
    display: flex;
`

const Item = styled.div`
    padding: 0 10px;
`

export default (props) => {
    const {redirect, logout, token} = props
    return <Wrapper>
        <LeftCol>TenofTen Logo</LeftCol>
        <RightCol>
            {!token && <Item onClick={()=> redirect('/') }>Login</Item>}
            {token && 
            <HiddenCol>
                <Item onClick={()=> redirect('/dashboard') }>Listing</Item>
                <Item onClick={() => redirect('/createquestion')}>Submit a Question</Item>
                <Item onClick={logout}>Logout</Item>
            </HiddenCol>}
        </RightCol>
    </Wrapper>
}