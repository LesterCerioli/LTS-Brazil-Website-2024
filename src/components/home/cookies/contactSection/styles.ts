import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;

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

export const Subtitle = styled.h6`
color: #000;
font-family: Montserrat;
font-size: 21px;
font-style: normal;
font-weight: 300;
line-height: normal;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
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

export const Card = styled.div`

`

export const CardImage = styled.img`
    margin: 10px;
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