import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    { threshold: 0.1 } 
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const PortfolioSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    const elements = document.querySelectorAll('.animated');
    if (onScreen) {
      elements.forEach((el) => el.classList.add('animate'));
    } else {
      elements.forEach((el) => el.classList.remove('animate'));
    }
  }, [onScreen]);

  return (
    <S.Container ref={ref}>
      <S.TitleContainer>
        <S.Title>Our Portfolio</S.Title>
        <S.Subtitle>Check out our recent works</S.Subtitle>
      </S.TitleContainer>
      <S.CardsMainContainer>
        <S.CardsContainer>
          <S.LeftCardsContainer>
            <S.Card>
              <h3>HOSPITAIS</h3>
              <S.CardImage1 className="animated" src="assets/imagesHome/hospital.svg" alt="Card 1" />
            </S.Card>
            <S.Card>
              <h3>ESCRITORIOS DE ADVOCACIA</h3>
              <S.CardImage2 className="animated" src="assets/imagesHome/advocate.svg" alt="Card 2" />
            </S.Card>
          </S.LeftCardsContainer>
          <S.RightCardsContainer>
            <S.Card>
              <h3>EMPRESAS DE CONTABILIDADE</h3>
              <S.CardImage3 className="animated" src="assets/imagesHome/contability.svg" alt="Card 3" />
            </S.Card>
            <S.Card>
              <h3>BANCOS FINANCEIROS</h3>
              <S.CardImage4 className="animated" src="assets/imagesHome/bank.svg" alt="Card 4" />
            </S.Card>
          </S.RightCardsContainer>
        </S.CardsContainer>
      </S.CardsMainContainer>
    </S.Container>
  );
};

export default PortfolioSection;
