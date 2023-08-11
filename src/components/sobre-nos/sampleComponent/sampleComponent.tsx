"use client";
import Image from 'next/image';
import * as S from './styles';

const text: string = "Lucas Tecnologia Serviços. é uma empresa de TI em rápido crescimento ...";
interface AboutProps {
  image: string; 
  text: string; 
}

export function SampleComponent({ image, text }: AboutProps) {
  return (
    <S.Container>
      <S.Body>
        <S.Image>
        <Image src="/sobreImg/sobreImg.png" width={500} height={300} alt={'Imagem de um escritório.'} />
        </S.Image>
        <p>{text}</p>
      </S.Body>
    </S.Container>
  );
}
