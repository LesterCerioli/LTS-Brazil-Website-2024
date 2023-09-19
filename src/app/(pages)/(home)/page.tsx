"use client";
import React from "react";
import * as S from "./styles";
import Cookies from "@/components/home/cookies/cookies/cookies";
import { Banner } from "@/components/home/cookies/homeBanner/homeBanner";
import { ServicesSection } from "@/components/home/cookies/servicesSection/servicesSection";
import { PortfolioSection } from "@/components/home/cookies/portfolioSection/portfolioSection";




const Home: React.FC = () => {

  return (
    <S.Container>
      <Banner />
      <ServicesSection />
      <PortfolioSection />
      <S.Cokkies>
        <Cookies />
      </S.Cokkies>
    </S.Container>
  );
};
export default Home;
