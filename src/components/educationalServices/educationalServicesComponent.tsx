import React from "react";
import * as S from "./styles";
import Image from "next/image";

interface EducationalServicesProps {
    title: string;
    subtitle: string;
    card1Text: string;
    card2Text: string;
    card3Text: string;
    card4Text: string;
}

export function EducationalServicesComponent(props: EducationalServicesProps) {
    return (
        <S.Container>
            <S.TitleContainer>
                <h1>{props.title}</h1>
            </S.TitleContainer>
            <S.SubtitleContainer>
                <h5>{props.subtitle}</h5>
            </S.SubtitleContainer>
            <S.ImageContainer>
                <Image src='' alt=''/>
            </S.ImageContainer>
            <S.CardsContainer>
                <S.Card>
                    <p>{props.card1Text}</p>
                </S.Card>   
                <S.Card>
                    <p>{props.card2Text}</p>
                </S.Card>   
                <S.Card>
                    <p>{props.card3Text}</p>
                </S.Card>   
                <S.Card>
                    <p>{props.card4Text}</p>
                </S.Card>   
            </S.CardsContainer>
        </S.Container>
    )
}

export default EducationalServicesComponent;
