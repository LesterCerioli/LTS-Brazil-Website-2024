"use client";
import { Card, DevUx } from "@/components/services/card/card";
import { Portal } from "@/components/services/card/card";
import * as S from "./styles";
import { cardUx, portalCard, services } from "@/data/services";

export default function Services() {
  return (
    <div>
      <S.Container>
        <h1>Nossos serviços</h1>
        <S.Services>
          {services.map((service) => {
            return (
              <Card
                key={service.title}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            );
          })}
        </S.Services>
      </S.Container>
      <S.portalCard>
        {portalCard.map((portal) => {
          return (
            <Portal 
              key={portal.title}
              title={portal.title}
              image={portal.image}
              description={portal.description}
            />
          );
        })}
      </S.portalCard>
          
      <S.Container>
      <S.portalCard>
        {cardUx.map((devUx) => {
          return (
            <DevUx
              key={devUx.title}
              title={devUx.title}
              image={devUx.image}
              description={devUx.description}
            />
          );
        })}
      </S.portalCard>
      </S.Container>

      <S.Container>
        <S.CardUx>
        {portalCard.map((portal) => {
          return (
            <Portal 
              key={portal.title}
              title={portal.title}
              image={portal.image}
              description={portal.description}
            />
          );
        })}
      </S.CardUx>
      </S.Container>
    </div>
  );
}
