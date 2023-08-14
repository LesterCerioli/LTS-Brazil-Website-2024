import React from 'react'
import * as S from './styles'
import Image from 'next/image';


export const OurPortfolio = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Nosso Portfólio</S.Title>
          <S.SpanDiv>
            <S.Span />
          </S.SpanDiv>
        </div>
          <S.Section>
            <S.Subtitle>Mercado Financeiro</S.Subtitle>
            <S.Subtitle>Bolsa de Valores de Nova Iorque</S.Subtitle>
            <Image src='/images/nyse2.png' alt="NYSE logo" width={300} height={200} />
          </S.Section>
      </S.Container>
    );
  };
  
  export default OurPortfolio;

  