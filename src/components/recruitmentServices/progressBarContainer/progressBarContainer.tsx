import React from 'react'
import * as S from './styles'
import ProgressBar from '../progressBar/progressBar'
import { recruitmentCycle } from '../helper/constants'
import ProgressBarDottedLine from '../progressBarDottedLine/progressBarDottedLine'

function ProgressBarContainer() {
  return (
    <S.ProBarContainer>
      <h1>Ciclo de recrutamento</h1>
      <div>
        {recruitmentCycle.map((card) => (
          <ProgressBar key={card.id} data={card} />
        ))}
      </div>
      <ProgressBarDottedLine />
    </S.ProBarContainer>
  )
}

export default ProgressBarContainer
