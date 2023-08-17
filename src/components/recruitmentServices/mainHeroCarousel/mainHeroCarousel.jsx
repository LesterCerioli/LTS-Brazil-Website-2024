import * as S from './styles'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

export function MainHeroCarousel() {
  return (
    <S.CarrousselStyles>
      <div>
        <h4>React-Bootstrap Carousel Component</h4>
        <Carousel>
          <Carousel.Item>
            <Image src="" alt="Image One" width={500} height={500} />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" alt="Image Two" />
          </Carousel.Item>
        </Carousel>
      </div>
    </S.CarrousselStyles>
  )
}

export default MainHeroCarousel
