import React from 'react'
import * as S from './styles'
import Image from 'next/image';

export const OurGithub = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Visite nosso Github</S.Title>
        </div>
        <div>
          <Image src='/images/github.png' alt='Github logo' width={375} height={210} />
        </div>
      </S.Container>
    );
  };
  
  export default OurGithub;