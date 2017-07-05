import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-bottom: 1px;
    > label > span {
        padding-left: 8px;
        font-size: 12px;
        font-weight: 200;
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
    border-radius: 2px;

    &:focus {
        border-color: #00465A;
    }
`

export const ErrorContainer = styled.div`
    padding-top: 6px;
    color: red;
`