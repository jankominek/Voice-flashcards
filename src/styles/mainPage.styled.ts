import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // border: 2px solid red;
`
export const MainViewWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainPageTitle = styled.div`
    font-size: 4rem;
    font-weight: 200;
    text-transform: uppercase;
`

export const MainPageButtonContainer = styled.div`
    width: 20rem;
    height: 10rem;
    margin: 1rem 0rem;
    border: 1px solid red;
`