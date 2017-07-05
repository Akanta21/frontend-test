import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    & > * {
        border-radius: 2px;
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        width: 100%;
        font-size: 20px;
        height: 48px;
        line-height: 48px;
        outline: none;
        padding: 0;
        text-align: center;
        text-decoration: none;
        user-select: none;
    }
`

const Button = styled.button``

export default ({
    children,
    onClick: handleClick
}) => <Wrapper>
    <Button onClick={handleClick}>{children}</Button>
</Wrapper>