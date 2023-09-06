'use client';
import React from 'react';
import Image from 'next/image';
import * as S from "./styles";
import devWeb from '@/assets/imagesDevWeb/services_hero.svg'
import { Container } from 'react-bootstrap';

export default function DevelopmentWeb() {
  return (
    <S.Container>
      
      <S.Title>
          Desenvolvimento Web
        
      </S.Title>

      <S.Mission>
        
           Desenvolvimento de Sites Profissionais para o Sucesso Online, onde  transformamos ideias em presença online notável. Somos uma equipe de especialistas dedicados a criar soluções digitais que impressionam e geram resultados. Combinando design atraente e funcionalidades avançadas, oferecemos uma variedade de serviços personalizados para atender às suas necessidades.        
        
      </S.Mission>

      <S.Imag>
        
          <Image src={devWeb} alt='devWeb' width={1074} height={437}/>
      </S.Imag>

      <S.Resources>
        <S.Itens>
          <div>
            
            Sites modernos, atraentes, otimizados para funcionar perfeitamente em todos os dispositivos, garantindo a melhor experiência do usuário.
            
          </div>

          <div >
           Transforme sua ideia de negócio em uma loja online de sucesso. Oferecemos soluções de comércio eletrônico personalizadas para impulsionar suas vendas online.        
          </div>
        
          <div>
            Garantimos que seu site seja rápido e eficiente, melhorando sua classificação nos mecanismos de busca e a satisfação do cliente. 
          </div>

          <div>
            Simplificamos a gestão do seu site com a integração de sistemas de gerenciamento de conteúdo (CMS) robustos, permitindo que você atualize facilmente seu conteúdo.        
          </div>
        </S.Itens>
      </S.Resources>

    </S.Container>
  )
}
