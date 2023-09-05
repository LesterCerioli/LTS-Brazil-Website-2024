'use client';
import React from 'react';
import Image from 'next/image';
import * as S from "./styles";
import devWeb from '@/assets/imagesDevWeb/mobileDevelopment_hero.svg';
//import { Container } from 'react-bootstrap';

export default function DevelopmentWeb() {
  return (
    <S.Container>
      
      <S.Title>
        <h1 className='title'> 
          Desenvolvimento Mobile
        </h1>
      </S.Title>

      <S.Mission>
        <p>
        Na era da mobilidade, trazemos sua ideia para a palma da mão. Nossa equipe especializada em desenvolvimento mobile cria aplicativos sob medida que redefinem a experiência do usuário.
        </p>
      </S.Mission>

      <div>
        <Image src={devWeb} alt='devWeb' width={1074} height={437}/>
      </div>

      <section>
        <div>
          Design e Desenvolvimento de Apps Intuitivos para iOS, Android e Windows Phone
        </div>
        <div>
          Integração com Recursos de Nuvem e APIs
        </div>
        <div>
         Otimização de Desempenho e Velocidade
        </div>
        <div>
         Testes Rigorosos para Garantir Qualidade
        </div>
      </section>

    </S.Container>
  )
}
