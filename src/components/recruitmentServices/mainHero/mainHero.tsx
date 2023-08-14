'use client'

import * as S from './styles'
import img from '@/assets/recruitment_hero.jpg'
import Image from 'next/image'

export function HeroMain() {
  return (
    <S.MainHero>
      <section>
        <div>
          <h4>
            Você está contratando ou procurando acessoria no assunto? Estamos
            aqui para te ajudar! Somos especializados em talent acquisition e
            vamos te ajudar na contratação que mais atende ao seu perfil.
          </h4>
          <Image src={img} width={1080} height={720} alt={'recruitment'} />
        </div>
      </section>
    </S.MainHero>
  )
}
