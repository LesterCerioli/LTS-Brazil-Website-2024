"use client";
import React from "react";
import * as S from "./styles";
import Cookies from "@/components/home/cookies/cookies/cookies";
import { Banner } from "@/components/home/cookies/homeBanner/homeBanner";
import { ServicesSection } from "@/components/home/cookies/servicesSection/servicesSection";




const Home: React.FC = () => {

  return (
    <S.Container>
      <Banner />
      <S.Cokkies>
        <Cookies />
      </S.Cokkies>
      <ServicesSection />
    </S.Container>
  );
};
export default Home;
