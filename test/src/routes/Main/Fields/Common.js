import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-bottom: 1px;
    > label > span {
        padding-left: 2px;
        font-size: 16px;
        font-weight: 400;
    }
`

export const InputHolder = styled.div`
    padding-top: 8px;
`

export const Input = styled.input`
    border: 1px solid #B5CACF;
    box-sizing: border-box;
    color: #001B22;
    font-size: 18px;
    height: 48px;
    outline: none;
    padding: 0 16px;
    width: 100%;
    background-color: white;
    border-radius: 4px;

    &:focus {
        border-color: #2f6b2a;
    }
`

export const ErrorContainer = styled.div`
    font-size: 12px;
    padding: 2px 0 8px 0;
    color: red;
`