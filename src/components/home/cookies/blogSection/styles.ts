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
flex-direction: column;
justify-content:flex-start;
margin: 20px;

@media (max-width: 1023px) {
    width: 95%;
    margin: 20px 0 20px 0;
}
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
    max-width: 67%;

    @media (min-width: 769px) and (max-width: 1300px){
     width: 100%;   
    }
`

export const LeftCardsContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 1024px) and (max-width: 1300px){
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 630px;
    }
    
    @media (max-width: 1023px) {
        max-width: 100%;
    }

`

export const RightCardsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 1024px) and (max-width: 1300px){
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 630px;
    }

    @media (max-width: 1023px) {
    display: none;
    }

`

export const CardImage1 = styled.img`
    margin: 10px;
    max-width: 58%;

    @media (min-width: 1301px) and (max-width:1760px){
        max-width: 60%;
        max-height: 350px;

    }

    @media (min-width: 1024px) and (max-width: 1300px){
        max-width: 50%;
        max-height: 250px;
    }

    @media (max-width: 1023px){
        max-width: 100%;
    }
`
export const CardImage2 = styled.img`
    margin: 10px;
    max-width: 58%;
    max-height: 100%;

    @media (min-width: 1301px) and (max-width:1760px){
        max-width: 60%;
        max-height: 330px;

    }

    @media (min-width: 769px) and (max-width: 1300px){
        max-width: 50%;
        max-height: 230px;
    }

    @media (max-width: 1023px){
        display: none;
    }
`
export const CardImage3 = styled.img`
    margin: 10px;
    max-width: 58%;
    max-height: 100%;

    @media (min-width: 1301px) and (max-width:1760px){
        max-width: 60%;
        max-height: 330px;

    }

    @media (min-width: 769px) and (max-width: 1300px){
        max-width: 50%;
        max-height: 230px;
    }

    @media (max-width: 1023px){
        display: none;
    }
`
export const CardImage4 = styled.img`
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

    @media (max-width: 1023px){
        display: none;
    }
`

export const ButtonContainer = styled.div`
    width: 59%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

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