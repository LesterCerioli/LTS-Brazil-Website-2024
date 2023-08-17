import React from 'react'
import * as S from './styles'

interface OurspecialtiesProps {
  data: {
    image: React.ReactElement
    title: string
    text: string
  }
}

function OurSpecialties(props: OurspecialtiesProps) {
  const { image, title, text } = props.data

  return (
    <S.OurSpec>
      <div>
        <div>
          {image}
          <h3>{title}</h3>
        </div>

        <p>{text}</p>
      </div>
    </S.OurSpec>
  )
}

export default OurSpecialties
