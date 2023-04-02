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
    color: snow;
`

export const MainPageButtonContainer = styled.div`
    width: 20rem;
    height: 10rem;
    margin: 1rem 0rem;
    border: 1px solid red;
`

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const MenuElement = styled(MainPageTitle)`
    font-size: 3rem;
    border: 1px solid red;
    margin: 5rem;
    position: absolute;
    border-radius: 50px;
    background: #444444;
    padding: 1rem 2rem;
    color: #FF8324;
    &:nth-child(1){
        transform: translateY(-10rem);
    }
    &:nth-child(5){
        transform: translateX(35rem);
    }
    &:nth-child(3){
        transform: translateY(10rem);
    }
    &:nth-child(4){
        transform: translateX(-30rem);
    }
`
