'use client'
import * as S from './styles'

import { MainHero } from '@/components/recruitmentServices/mainHero/mainHero'
import { SubHero } from '@/components/recruitmentServices/subHero/subHero'
import RecruitmentCardContainer from '@/components/recruitmentServices/recruitmentCardContainer/recruitmentCardContainer'
import OurServicesCardContainer from '@/components/recruitmentServices/ourServicesCardContainer/ourServicesCardContainer'
import RecruitmentCycleContainer from '@/components/recruitmentServices/recruitmentCycleContainer/recruitmentCycleContainer'
import OurSpecialtiesContainer from '@/components/recruitmentServices/ourSpecialtiesContainer/ourSpecialtiesContainer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RecruitmentServices() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <MainHero />
      <SubHero />
      <RecruitmentCardContainer />
      <OurServicesCardContainer />
      <RecruitmentCycleContainer />
      <OurSpecialtiesContainer />
    </S.Container>
  )
}
