'use client'

import * as S from './styles'
import img from '@/assets/imagesRecruitmentServices/recruitment_hero.jpg'
import Image from 'next/image'
import MainHeroSwiper from '@/components/recruitmentServices/mainHeroSwiper/mainHeroSwiper'

export function MainHero() {
  return (
    <S.MainHero>
      <section>
        <h1>Serviço de recrutamento</h1>
        <div>
          <h4>
            Você está contratando ou procurando acessoria no assunto? Estamos
            aqui para te ajudar! Somos especializados em talent acquisition e
            vamos te ajudar na contratação que mais atende ao seu perfil.
          </h4>
          <MainHeroSwiper />
        </div>
      </section>
    </S.MainHero>
  )
}
