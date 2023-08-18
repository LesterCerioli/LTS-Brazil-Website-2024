"use client";
import * as S from "./styles";
import Image from "next/image";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


export function Header() {
  return (
    <S.Container>
      <S.TopHeader>
        <S.SocialsContainer>
          <a href="https://www.instagram.com/lucastecnologiaservice/"><S.InstagramIcon /></a>
          <a><FaGithub /></a>
          <a><FaLinkedin /></a>
        </S.SocialsContainer>
        <S.ContactContainer>
          <S.ContactLink>+55 21 3042-5441</S.ContactLink>
          <S.ContactLink>commercial2018@lucastechnologyservice.com</S.ContactLink>
        </S.ContactContainer>
      </S.TopHeader>
      <nav>
        <Image src= '/assets/imagesNav/lcsLogo.png' alt='Lucas Technology Services Logo' width={104} height={104}/>
      </nav>
    </S.Container>
  );
}

