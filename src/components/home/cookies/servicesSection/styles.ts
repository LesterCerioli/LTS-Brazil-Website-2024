import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`

export const TitleContainer = styled.div`
min-width: 67%;
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
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px 0 10px ;

    @media (min-width: 531px) and (max-width: 1083px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 530px) {
        width: 100%;
    }
`

export const TopCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
`

export const BottomCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
`

export const Card = styled.div`
   margin: 15px; 
   max-width: 404px;
`

export const CardImage1 = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 530px)  {
        max-width: 100%;
    }
`
export const CardImage2 = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 530px)  {
        max-width: 100%;
    }
`
export const CardImage3 = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 530px)  {
        max-width: 100%;
    }
`
export const CardImage4 = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1023px)  {
        display: none;
    }
`
export const CardImage5 = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1023px)  {
        display: none;
    }
`
export const CardImage6 = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1023px)  {
        display: none;
    }
`

export const CardText = styled.p`
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: 5px;
    
    @media (max-width: 1023px)  {
        display: none;
    }
`

export const ButtonContainer = styled.div`
    width: 73%;
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