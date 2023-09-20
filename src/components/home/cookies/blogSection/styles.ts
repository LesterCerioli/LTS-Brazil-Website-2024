import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const TitleContainer = styled.div`
width: 78%;
display: flex;
flex-direction: column;
justify-content:flex-start;
margin: 20px;
`

export const Title = styled.h3`
color: #000;
font-family: Rubik;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 5px;
`
export const CardsMainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media (min-width: 769px) and (max-width: 1300px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 80%;

    @media (min-width: 769px) and (max-width: 1300px){
     width: 100%;   
    }
`

export const LeftCardsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 769px) and (max-width: 1300px){
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 630px;
    }
`

export const RightCardsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 769px) and (max-width: 1300px){
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 630px;
    }
`

export const CardImage = styled.img`
    margin: 10px;
    max-width: 58%;

    @media (min-width: 1301px) and (max-width:1760px){
        max-width: 60%;
        max-height: 350px;

    }

    @media (min-width: 769px) and (max-width: 1300px){
        max-width: 50%;
        max-height: 250px;
    }
`

export const ButtonContainer = styled.div`
    width: 78%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1083px) {
        display: flex;
        justify-content: center;
    }
`

export const Button = styled.button`
width: 210px;
height: 50px;
flex-shrink: 0;
background: #5050EA;

`

export const ButtonText = styled.a`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: normal;
`