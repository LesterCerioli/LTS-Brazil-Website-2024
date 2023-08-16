"use client";
import * as React from "react";
import * as S from "./styles";
import Image from 'next/image';

interface AboutProps {
  image: string; 
  text: string;
}

export default function AboutUsComponent({ image, text }: AboutProps) {
  return (
    <S.Container>
      <S.Body>
        <S.Image>
          <Image src={image} alt={'Descrição da imagem'} width={500} height={300}/>
        </S.Image>
        <p className="text">{text}</p>
      </S.Body>
    </S.Container>
  );
}
