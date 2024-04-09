"use client"
import Image from "next/image";
import * as S from "./styles";
import React from "react"
import { Slider } from "@/components/shared/slider/slider";

  export function ServicesSection() {
    
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Serviços</S.Title>
                <S.Subtitle>Visite nossa página e explore a variedade de serviços que oferecemos para atender às suas necessidades.</S.Subtitle>
            </S.TitleContainer>

            <Slider />
            {/* <S.CardsContainer>
                <S.TopCardsContainer>
                    <S.Card>
                        <S.CardImage1 src="assets/imagesHome/services_card_1.svg"/>
                        <S.TextContainer>
                            <S.CardText>Crie portais educacionais envolventes e atrativos.</S.CardText>
                        </S.TextContainer>
                    </S.Card>
                    <S.Card>
                        <S.CardImage2 src="assets/imagesHome/services_card_2.svg"/>
                        <S.TextContainer>
                            <S.CardText>Potencialize seus negócios com nossos CRMs/ERPs personalizados.</S.CardText>
                        </S.TextContainer>
                    </S.Card>
                    <S.Card>
                        <S.CardImage3 src="assets/imagesHome/services_card_3.svg"/>
                        <S.TextContainer>
                            <S.CardText>Construa portais de viagens emocionantes conosco.</S.CardText>
                        </S.TextContainer>
                    </S.Card>
                </S.TopCardsContainer>
                <S.BottomCardsContainer>
                    <S.Card>
                        <S.CardImage4 src="assets/imagesHome/services_card_4.svg"/>
                        <S.TextContainer>
                            <S.CardText>Crie experiências digitais com nosso design UI/UX especializado.</S.CardText>
                        </S.TextContainer>
                    </S.Card>
                    <S.Card>
                        <S.CardImage5 src="assets/imagesHome/services_card_5.svg"/>
                        <S.TextContainer>
                            <S.CardText>Construa aplicativos móveis inovadores.</S.CardText>
                        </S.TextContainer>
                    </S.Card>
                    <S.Card>
                        <S.CardImage6 src="assets/imagesHome/services_card_6.svg"/>
                        <S.TextContainer>
                            <S.CardText>Crie portais imobiliários de alto desempenho conosco.</S.CardText>
                        </S.TextContainer>
                    </S.Card>
                </S.BottomCardsContainer>
            </S.CardsContainer> */}
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="services">Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
    );
  }

  export default ServicesSection