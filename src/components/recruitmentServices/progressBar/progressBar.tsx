import React from 'react'
import * as S from './styles'
interface ProgressBarProps {
  data: {
    image: React.ReactElement
    text: string
  }
}

function ProgressBar(props: ProgressBarProps) {
  const { image, text } = props.data

  return (
    <S.ProgressBar>
      <div>
        <ul>
          <li>{image}</li>
          <p>{text}</p>
        </ul>
      </div>
    </S.ProgressBar>
  )
}

export default ProgressBar
