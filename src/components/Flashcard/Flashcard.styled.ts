import styled from "styled-components";

export const FlashcardWrapper = styled.div`
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FlashcardContentField = styled.div<{zeroSize?: boolean, height?: number, width?: number}>`
    // ${(props) => `
    //     width: ${props.width}%;
    //     height: ${props.height}%;
    // `}
    width: 100%;
    height:100%;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    position: relative;
    align-items: center;
    flex-direction: column;
    background: snow;
    box-shadow: 0px 0px 15px -8px rgba(66, 68, 90, 1);
`

export const FlashcardsWord = styled.input`
    font-size: 2rem;
    border: none;
    background: transparent;
    opacity: 0;
    padding: .5rem 1rem;
    border-bottom: 1px solid gray;
    &:focus{
        outline: none;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 10%;
    opacity: 0;
`

