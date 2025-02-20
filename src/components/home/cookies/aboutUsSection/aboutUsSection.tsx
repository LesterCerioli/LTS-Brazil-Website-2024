"use client";
import * as S from "./styles";
import React from "react";

export function AboutUsSection() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>🌍 Sobre Nós</S.Title>
      </S.TitleContainer>
      <S.CardsContainer>
        <S.CardImage src="assets/imagesHome/about_us_card.svg" />
      </S.CardsContainer>
      <S.SubtitleContainer>
        
      </S.SubtitleContainer>
      <S.ButtonContainer>
        <S.Button>
          <S.ButtonText href="aboutUs">Saiba mais</S.ButtonText>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
