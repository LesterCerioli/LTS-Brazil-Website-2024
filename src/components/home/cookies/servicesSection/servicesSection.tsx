"use client"
import Image from "next/image";
import * as S from "./styles";
import React from "react"
import { Slider } from "@/components/shared/slider/slider";
import { homePageSlider } from "@/components/shared/slider/helper/imageConstants"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

  export function ServicesSection() {
    
    return (
        
        <S.Container>
            <SpeedInsights />
            <Analytics />
            <S.TitleContainer>
                <S.Title>Serviços</S.Title>
                <S.Subtitle>
                    Elevamos sua empresa ao próximo nível com tecnologia de ponta! Nossos serviços são 
                    desenvolvidos para garantir <strong>segurança, eficiência e escalabilidade</strong>, 
                    ajudando você a alcançar resultados extraordinários.  
                </S.Subtitle>
            </S.TitleContainer>

            <Slider data={homePageSlider} />

            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="services">Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
    );
  }

  export default ServicesSection