import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`

export const TitleContainer = styled.div`
width: 66%;
display: flex;

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
`

export const CardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 70%;
`

export const LeftCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const RightCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const CardImage1 = styled.img`
    margin: 10px;
    max-width: 49%;
`
export const CardImage2 = styled.img`
    margin: 10px;
    max-width: 49%;
`

export const ButtonContainer = styled.div`
    width: 66%;
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
text-decoration: none;
`