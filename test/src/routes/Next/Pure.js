import React from 'react'
import styled from 'styled-components'

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


export default props => {

    return <Wrapper>
        Hi
    </Wrapper>
}