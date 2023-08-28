import React, { useState, useEffect } from 'react';
import * as S from './styles';
import './styles.css';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';
import styled from 'styled-components';
import LCSLogo from '../logo/logo';

interface NavbarLinkProps {
  href: string;
  label: string;
}

const StyledNavbarLink = styled.div`
  color: #1B1B1B;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.136px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 1001px) and (max-width: 1300px) {
    font-size: 11px;
    padding-top: 10px;
  }
`;

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => (
  <Link href={href}>
    <StyledNavbarLink>{label}</StyledNavbarLink>
  </Link>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container className={scrolled ? 'navbar scrolled' : 'navbar'}>
      {isMobile && (
        <S.HamburgerMenu onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </S.HamburgerMenu>
      )}
      <S.LeftContainer className={menuOpen ? 'show' : ''}>
        <NavbarLink href="/" label="Início" />
        <NavbarLink href="/services" label="Serviços" />
        <NavbarLink href="/contact" label="Contato" />
        <NavbarLink href="/consultancy" label="Consultoria" />
      </S.LeftContainer>
      <S.LogoContainer id='logoContainer'>
        <LCSLogo />
        <S.ContactLink id='contactLink' href='tel:+552130425441'>+55 21 3042-5441</S.ContactLink>
      </S.LogoContainer>
      <div id='navDiv'></div>
      <S.RightContainer className={menuOpen ? 'show' : ''}>
        <NavbarLink href="/aboutUs" label="Sobre Nós" />
        <NavbarLink href="/portfolio" label="Portfolio" />
        <NavbarLink href="/recruitmentServices" label="Serviços de Recrutamento" />
        {menuOpen && (
          <S.CloseButton onClick={toggleMenu}>
            <CgClose />
          </S.CloseButton>
        )}
      </S.RightContainer>
    </S.Container>
  );
};

export default Navbar;
