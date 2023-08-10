"use client";
import * as S from "./styles";
 
import OurPortfolio from "@/components/portfolio/ourPortfolio/ourPortfolio";
import OurClients from "@/components/portfolio/ourClients/ourClients";
import OurGithub from "@/components/portfolio/ourGithub/ourGithub";

export default function Portfolio() {
  return (
    <S.Container>
      <OurPortfolio />
      <OurClients />
      <OurGithub />
    </S.Container>
  );
}
