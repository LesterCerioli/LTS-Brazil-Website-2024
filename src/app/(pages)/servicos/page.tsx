"use client";
import { Card } from "@/components/servicos/card/card";
import * as S from "./styles";
import { services } from "@/data/services";

export default function Services() {
  return (
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
  );
}
