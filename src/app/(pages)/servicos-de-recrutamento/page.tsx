'use client'
import Differential from '@/components/servicos-de-recrutamento/differentials/differential'
import * as S from './styles'

import { HeroMain } from '@/components/servicos-de-recrutamento/mainHero/mainHero'
import { SubHero } from '@/components/servicos-de-recrutamento/subHero/subHero'
import Differentials from '@/components/servicos-de-recrutamento/differentials/differential'
import DifferentialsText from '@/components/servicos-de-recrutamento/differentialsText/differentialsText'

export default function RecruitmentServices() {
  return (
    <S.Container>
      <h1>Serviço de recrutamento</h1>
      <HeroMain />
      <SubHero />
      <Differentials />
    </S.Container>
  )
}
