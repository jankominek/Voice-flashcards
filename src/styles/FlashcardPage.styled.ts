import styled from "styled-components";

export const FlashcardPageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const FlashcardContentWrapper = styled.div`
    width: 50rem;
    height: 80%;
    border-radius: 10px;
    background: snow;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // background: rgba(255, 255, 255, 0.21);
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    // backdrop-filter: blur(5px);
    // border: 1px solid rgba(255, 255, 255, 0.3);
`

export const FlashcardButtonContainer = styled.div`
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
`