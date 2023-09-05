"use client";
import DevWeb from '@/components/developmentWeb/devWeb';
import * as S from "./styles";
import Image from 'next/image';



export default function DevelopmentWeb() {
  return (
    <S.Container>
      <DevWeb />
    </S.Container>
    
  );
}

// improtar styles
//colocar tudo dentro do S.container