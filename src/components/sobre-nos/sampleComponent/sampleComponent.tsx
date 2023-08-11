"use client";
import Image from 'next/image';
import * as S from './styles';
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
        <p>{text}</p> {'Lucas Tecnologia Serviços. é uma empresa de TI em rápido crescimento que fornece soluções de TI holísticas para empresas em todas as regiões. Oferecemos experiência em TI no desenvolvimento de software, site e aplicativo (iOS e Android); Design de UI/UX; e marketing digital. Estamos situados em cerca de 12 postos de atendimento, atendendo empresas de diversos setores. Até agora, temos incursionado nos setores de saúde, serviços de alimentação, viagens e turismo, logística e transporte, comércio eletrônico, bancos, tecnologia, manufatura e serviços de educação habilitados para TI. Atualmente, temos uma equipe de profissionais de TI altamente qualificados que trabalham 24 horas por dia para garantir que a Techasoft permaneça fiel às suas ofertas e compromissos. Nossa equipe de especialistas experientes inclui desenvolvedores de software, desenvolvedores web, designers e especialistas em marketing digital.'}
      </S.Body>
    </S.Container>
  );
}
