"use client";
import * as S from "./styles";
import  TopHeaderContainer from "./contactContainer/contactContainer";
import LinksContainer from "./pagesLinksContainer/pagesLinksContainer";

export function Header() {
  return (
    <S.Container>
      <TopHeaderContainer />
      <LinksContainer />
    </S.Container>
  );
}

