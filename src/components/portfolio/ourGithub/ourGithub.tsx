import React from 'react'
import * as S from './styles'
import Image from 'next/image';

export const OurGithub = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Visite nosso Github</S.Title>
          <S.SpanDiv>
            <S.Span />
            <S.Span />
            <S.Span />
          </S.SpanDiv>
        </div>
        <S.RepositoryContainer>
          <div>
            <Image src='/images/github2.png' alt='Github logo' width={375} height={210} />
          </div>
          <S.GithubContainer>
            <S.Subtitle>Nosso repositório</S.Subtitle>
              <a href='https://github.com/Lucas-Technology-Services'>
                <S.Button>Nosso Github</S.Button>
              </a>
          </S.GithubContainer>
        </S.RepositoryContainer>
      </S.Container>
    );
  };
  
  export default OurGithub;