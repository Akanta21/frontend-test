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

const Button = styled.button`
    background-color: #29ce7e;
    border-radius: 4px;
    color: white;
`

export default ({
    children,
    onClick: handleClick
}) => <Wrapper>
    <Button className='btn block full-width' onClick={handleClick}>{children}</Button>
</Wrapper>