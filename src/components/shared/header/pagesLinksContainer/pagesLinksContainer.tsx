"use client";
import React, { useState, useEffect } from 'react';
import * as S from './styles'; 
import './styles.css';
import { CgClose } from "react-icons/cg";
import Link from 'next/link';

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
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Container className={scrolled ? 'navbar scrolled' : 'navbar'}>
      {window.innerWidth <= 1000 && (
      <S.HamburgerMenu onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </S.HamburgerMenu>
    )}
      <S.LeftContainer className={menuOpen ? 'show' : ''}>
        <Link href="/">
          <S.LeftLink>Início</S.LeftLink>
        </Link>
        <Link href="/servicos">
          <S.LeftLink>Serviços</S.LeftLink>
        </Link>
        <Link href="/contato">
          <S.LeftLink>Contato</S.LeftLink>
        </Link>
        <Link href="/consultoria">
          <S.LeftLink>Consultoria</S.LeftLink>
        </Link>
      </S.LeftContainer>
      <S.LogoContainer>
        <img className='logo' src='/assets/imagesNav/lcsLogo.png'></img>
      </S.LogoContainer>
      <S.RightContainer className={menuOpen ? 'show' : ''}>
        <Link href="/aboutUs">
          <S.RightLink>Sobre Nós</S.RightLink>
        </Link>
        <Link href="/portfolio">
          <S.RightLink>Portfolio</S.RightLink>
        </Link>
        <Link href="/servicos-de-recrutamento">
          <S.RightLink>Serviços de Recrutamento</S.RightLink>
        </Link>
      {menuOpen && (
        <S.CloseButton onClick={toggleMenu}>
          <CgClose></CgClose>
        </S.CloseButton>
  )}
      </S.RightContainer>
  </S.Container>
  )
}

export default LinksContainer;