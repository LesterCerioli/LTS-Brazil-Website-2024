import React from 'react'
import * as S from './styles' // Import your styles
import ProgressBar from '../progressBar/progressBar'
import { recruitmentCycle } from '../helper/constants'

function ProgressBarContainer() {
  return (
    <S.ProBarContainer>
      <h1>Ciclo de recrutamento</h1>
      <div>
        {recruitmentCycle.map((card) => (
          <ProgressBar key={card.id} data={card} />
        ))}
      </div>
    </S.ProBarContainer>
  )
}

export default ProgressBarContainer
