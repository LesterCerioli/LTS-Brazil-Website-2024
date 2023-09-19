"use client"
import * as S from "./styles";
import React from "react"

  export function BlogSection() {
    
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Blog</S.Title>
            </S.TitleContainer>
            <S.CardsContainer>
                <S.LeftCardsContainer>
                    <S.CardImage src="assets/imagesHome/blog_card_1.svg"/>
                    <S.CardImage src="assets/imagesHome/blog_card_2.svg"/>
                </S.LeftCardsContainer>
                <S.RightCardsContainer>
                    <S.CardImage src="assets/imagesHome/blog_card_3.svg"/>
                    <S.CardImage src="assets/imagesHome/blog_card_4.svg"/>
                </S.RightCardsContainer>   
            </S.CardsContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="blog">Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
        
    );
}
            