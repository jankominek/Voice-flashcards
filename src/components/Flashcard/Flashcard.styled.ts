import styled from "styled-components";

export const FlashcardWrapper = styled.div`
    width: 60%;
    height: 60%;
`

export const FlashcardContentField = styled.div<{zeroSize?: boolean, height: number, width: number}>`
    ${(props) => `
        width: ${props.width}%;
        height: ${props.height}%;
    `}
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: snow;
    border: 1px solid red;
    box-shadow: 0px 0px 15px -8px rgba(66, 68, 90, 1);
    ${({zeroSize}) => zeroSize && `
        width: 0;
        position: relative;
        height: 0;
    `}
`

export const FlashcardsWord = styled.p`
    font-size: 2rem;
`
