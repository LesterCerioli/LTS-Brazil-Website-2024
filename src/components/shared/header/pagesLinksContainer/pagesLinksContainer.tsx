"use client";
import React, { useState, useEffect } from 'react';
import * as S from './styles'; 
import Image from 'next/image';
import './styles.css';

export function LinksContainer() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) { 
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <S.LeftContainer>
        <S.LeftLink>Início</S.LeftLink>
        <S.LeftLink>Serviços</S.LeftLink>
        <S.LeftLink>Contato</S.LeftLink>
        <S.LeftLink>Consultoria</S.LeftLink>
      </S.LeftContainer>
      <S.LogoContainer>
        <img src='/assets/imagesNav/lcsLogo.png'></img>
      </S.LogoContainer>
      <S.RightContainer>
        <S.RightLink>Sobre Nós</S.RightLink>
        <S.RightLink>Portfolio</S.RightLink>
        <S.RightLink>Serviços de Recrutamento</S.RightLink>
      </S.RightContainer>
    </S.Container>
  )

}

export default LinksContainer;