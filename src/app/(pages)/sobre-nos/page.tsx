"use client";
import * as S from "./styles";
import { SampleComponent } from "@/components/sobre-nos/sampleComponent/sampleComponent";

export default function AboutUs() {
  return (
    <S.Container>
      <h1>Sobre nós</h1>
      <SampleComponent
        title="Título do componente"
        image="sobreImg/sobreImg.jpg"
        text="Texto do componente"
      />
    </S.Container>
  );
}
