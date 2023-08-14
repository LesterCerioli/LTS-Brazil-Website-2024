import React from 'react'
import * as S from './styles'
import OurServicesCard from '@/components/recruitmentServices/ourServicesCard/ourServicesCard'
import { ourServicesText } from '../helper/constants'

function OurServicesCardContainer() {
  return (
    <S.ServicesCardContainer>
      <h1>Nossas especialidades</h1>
      <div>
        {ourServicesText.map((card) => (
          <OurServicesCard key={card.id} data={card} />
        ))}
      </div>
    </S.ServicesCardContainer>
  )
}

export default OurServicesCardContainer
