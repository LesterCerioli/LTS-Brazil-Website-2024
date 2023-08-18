"use client";
import * as S from "./styles";
import Image from "next/image";


export function LinksContainer () {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.LeftLink>Início</S.LeftLink>
        <S.LeftLink>Serviços</S.LeftLink>
        <S.LeftLink>Contato</S.LeftLink>
        <S.LeftLink>Consultoria</S.LeftLink>
      </S.LeftContainer>
      <S.LogoContainer>
        <Image src= '/assets/imagesNav/lcsLogo.png' alt='Lucas Technology Services Logo' width={104} height={104}/>
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