"use client";
import * as React from "react";
import * as S from "./styles";
import Image from 'next/image';
import LogoImage from "@/assets/imagesAboutUs/aboutUsLogo.png";

export default function AboutUs() {
  return (
    <S.Container>
      <S.Title>
        <h1>Sobre nós</h1>
        <div className="hline"></div>
      </S.Title>
      <S.ContainerCards>
        <S.BigCardContainer>
          <S.BigCard>
            <S.ImgContainer>
              <Image src={LogoImage.src} alt="Descrição da segunda imagem" width={180} height={180} className="img" />
            </S.ImgContainer>
            Na Lucas Tecnologia Serviços, somos mais do que apenas uma empresa de tecnologia. Nós nos destacamos no mercado por nossa abordagem diferenciada e compromisso inabalável com a excelência. O que nos torna verdadeiramente diferentes?
          </S.BigCard>
        </S.BigCardContainer>
        <S.SmallCardsContainer>
          <S.SmallCard>
            Foco no Cliente: Colocamos nossos clientes no centro de tudo o que fazemos. Nossa equipe trabalha em estreita colaboração com cada cliente para entender suas necessidades específicas e fornecer soluções personalizadas que impulsionam o sucesso de seus negócios.
          </S.SmallCard>
          <S.SmallCard>
            Inovação Constante: Estamos sempre buscando novas maneiras de melhorar e inovar. Desde a adoção de tecnologias de ponta até o desenvolvimento de soluções personalizadas, estamos comprometidos em impulsionar a inovação em todos os aspectos de nosso trabalho.
          </S.SmallCard>
          <S.SmallCard>
            Equipe Excepcional: Nossa equipe é nosso maior ativo. Com profissionais altamente qualificados e experientes em diversas áreas da tecnologia, estamos preparados para enfrentar os desafios mais complexos e entregar resultados excepcionais a cada projeto.
          </S.SmallCard>
          <S.SmallCard>
            Transparência e Integridade: Valorizamos a transparência e a integridade em todas as nossas interações. Nossos clientes confiam em nós para fornecer soluções confiáveis e honestas, e nos esforçamos para superar suas expectativas em cada projeto.
          </S.SmallCard>
          <S.SmallCard>
            Compromisso com o Sucesso: Não nos contentamos com menos do que a excelência. Estamos comprometidos em garantir o sucesso de nossos clientes, trabalhando incansavelmente para superar desafios e alcançar resultados excepcionais em cada projeto.
          </S.SmallCard>
        </S.SmallCardsContainer>
      </S.ContainerCards>
      <S.CardDown>
        Na Lucas Tecnologia Serviços, estamos moldando o futuro da tecnologia e capacitando empresas para alcançarem seu pleno potencial. Venha fazer parte dessa jornada conosco!
      </S.CardDown>
    </S.Container>
  );
}
