"use client"
import * as S from "./styles";
import React from "react"

  export function PortfolioSection() {
    
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Portfólio</S.Title>
                <S.Subtitle>
                    Explore nosso portfólio e descubra como transformamos ideias em{" "}
                    <strong>soluções inovadoras e de alto impacto</strong>. Cada projeto
                    reflete nossa <strong>paixão por tecnologia</strong>,{" "}
                    <strong>excelência em desenvolvimento</strong> e{" "}
                    <strong>compromisso com resultados extraordinários</strong>.
                </S.Subtitle>
            </S.TitleContainer>
            <S.CardsMainContainer>
                <S.CardsContainer>
                    <S.LeftCardsContainer>
                        <S.CardImage1 src="assets/imagesHome/portfolio_card_1.svg"/>
                        <S.CardImage2 src="assets/imagesHome/portfolio_card_2.svg"/>
                    </S.LeftCardsContainer>
                    <S.RightCardsContainer>
                        <S.CardImage3 src="assets/imagesHome/portfolio_card_3.svg"/>
                        <S.CardImage4 src="assets/imagesHome/portfolio_card_4.svg"/>
                    </S.RightCardsContainer>   
                </S.CardsContainer>
            </S.CardsMainContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="portfolio">Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
        
    );
}
            