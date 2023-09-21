"use client"
import * as S from "./styles";
import React from "react"

  export function ServicesSection() {
    
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Serviços</S.Title>
                <S.Subtitle>Visite nossa página e explore a variedade de serviços que oferecemos para atender às suas necessidades.</S.Subtitle>
            </S.TitleContainer>
            <S.CardsContainer>
                <S.TopCardsContainer>
                    <S.Card>
                        <S.CardImage1 src="assets/imagesHome/services_card_1.svg"/>
                        <S.CardText>Crie portais educacionais envolventes e atrativos.</S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardImage2 src="assets/imagesHome/services_card_2.svg"/>
                        <S.CardText>Potencialize seus negócios com nossos CRMs/ERPs personalizados.</S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardImage3 src="assets/imagesHome/services_card_3.svg"/>
                        <S.CardText>Construa portais de viagens emocionantes conosco.</S.CardText>
                    </S.Card>
                </S.TopCardsContainer>
                <S.BottomCardsContainer>
                    <S.Card>
                        <S.CardImage4 src="assets/imagesHome/services_card_4.svg"/>
                        <S.CardText>Crie experiências digitais com nosso design UI/UX especializado.</S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardImage5 src="assets/imagesHome/services_card_5.svg"/>
                        <S.CardText>Construa aplicativos móveis inovadores.</S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardImage6 src="assets/imagesHome/services_card_6.svg"/>
                        <S.CardText>Crie portais imobiliários de alto desempenho conosco.</S.CardText>
                    </S.Card>
                </S.BottomCardsContainer>
            </S.CardsContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="services">Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
    );
  }

  export default ServicesSection