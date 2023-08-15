'use client'
import * as S from './styles'

import Differential from '@/components/recruitmentServices/differentials/differential'
import { HeroMain } from '@/components/recruitmentServices/mainHero/mainHero'
import { SubHero } from '@/components/recruitmentServices/subHero/subHero'
import Differentials from '@/components/recruitmentServices/differentials/differential'
import DifferentialsText from '@/components/recruitmentServices/differentialsText/differentialsText'
import RecruitmentCardContainer from '@/components/recruitmentServices/recruitmentCardContainer/recruitmentCardContainer'
import OurServicesCardContainer from '@/components/recruitmentServices/ourServicesCardContainer/ourServicesCardContainer'
import ProgressBarContainer from '@/components/recruitmentServices/progressBarContainer/progressBarContainer'

export default function RecruitmentServices() {
  return (
    <S.Container>
      <h1>Serviço de recrutamento</h1>
      <HeroMain />
      <SubHero />
      <RecruitmentCardContainer />
      <OurServicesCardContainer />
      <ProgressBarContainer />
    </S.Container>
  )
}
