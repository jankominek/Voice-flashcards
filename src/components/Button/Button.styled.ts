import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 15px -8px rgba(66, 68, 90, 1);
    padding: 1rem 2rem;
    cursor: pointer;
`

export const ButtonText = styled.p`
    font-size: 1.3rem;
`

export const IconWrapper = styled.div<{color?: string}>`
    margin: 0 .5rem 0 0;
    display: flex;
    font-size: 1.3rem;
    align-items: center;
    ${({color}) => `color: ${color}`};
`