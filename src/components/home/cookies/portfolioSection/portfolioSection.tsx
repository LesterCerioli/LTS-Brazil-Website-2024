"use client"
import * as S from "./styles";
import React from "react"

  export function PortfolioSection() {
    
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Portfólio</S.Title>
                <S.Subtitle>Visite nossa página e explore a variedade de serviços que oferecemos para atender às suas necessidades.</S.Subtitle>
            </S.TitleContainer>
            <S.CardsContainer>
                <S.Card>
                    <S.CardImage src="assets/imagesHome/Rectangle 153.svg"/>
                </S.Card>
                <S.Card>
                    <S.CardImage src="assets/imagesHome/Rectangle 154.svg"/>
                </S.Card>
                <S.Card>
                    <S.CardImage src="assets/imagesHome/Rectangle 155.svg"/>
                </S.Card>
                <S.Card>
                    <S.CardImage src="assets/imagesHome/Rectangle 156.svg"/>
                </S.Card>
            </S.CardsContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText>Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
        
    );
}
            