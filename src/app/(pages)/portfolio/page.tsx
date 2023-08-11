"use client";
import * as S from "./styles";
 
import OurPortfolio from "@/components/portfolio/ourPortfolio/ourPortfolio";
import OurClients from "@/components/portfolio/ourClients/ourClients";
import OurGithub from "@/components/portfolio/ourGithub/ourGithub";
import ClientsList from "@/components/portfolio/clientsList/clientsList";

export default function Portfolio() {
  return (
    <S.Container>
      <section>
        <OurPortfolio />
      </section>
      <section>
        <OurClients />
        <ClientsList />
      </section>
      <section>
        <OurGithub />
      </section>
    </S.Container>
  );
}
