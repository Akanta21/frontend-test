import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #efaeae;
    color: black;
    width: 30%;
    text-align: center;
    padding: 12px;
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 400px;
`

export default ({
    children
}) => <Wrapper>{children}</Wrapper>