import React from 'react'
import * as S from './styles'
import NyseLogo from '../images/NYSE-logo.png'


export const OurPortfolio = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Nosso Portfólio</S.Title>
        </div>
        <section>
          <div>
            <img src={NyseLogo} alt="NYSE Logo" />
          </div>
          <div>
            <S.Subtitle>Mercado Financeiro</S.Subtitle>
            <S.Subtitle>Bolsa de Valores de Nova Iorque</S.Subtitle>
          </div>
        </section>
      </S.Container>
    );
  };
  
  export default OurPortfolio;

  