"use client";
import React, { useRef } from "react";
import Image from "next/image";
import * as S from "./styles";
import CapaEnglosite from "@/assets/imagesHome/capaEnglosite.png";
import Design from "@/assets/imagesHome/design.png";
import Crms from "@/assets/imagesHome/crms.png";
import Marketing from "@/assets/imagesHome/marketing.png";
import Mobile from "@/assets/imagesHome/mobile.png";
import Sites from "@/assets/imagesHome/sites.png";
import Eua from "../../../assets/imagesHome/digitandoMouseTeclado2.png";
import Tecnologia from "@/assets/imagesHome/tecnologia.png";
import Ecommerces from "@/assets/imagesHome/eCommerces.png";
import MercadoFinanceiro from "@/assets/imagesHome/mercadoFinanceiro.png";
import Hospitalar from "@/assets/imagesHome/hospitalar.png";
import Turismo from "@/assets/imagesHome/turismo.png";
import Educacao from "@/assets/imagesHome/educacao.png";
import CloudSuite from "@/assets/imagesHome/cloudSuite.png";
import Chevron from "@/assets/imagesHome/right_chevron_icon.png";
import Link from "next/link";

export default function Home() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <S.Container>
      <S.Title>
        <h1>Bem-vindo(a) a Lucas Tecnologia Services!</h1>
        <p>A mudança do seu negócio começa aqui.</p>
      </S.Title>

      <div>
        <S.FirstSection>
          <S.SectionStart>
            <Image src={CapaEnglosite} alt="" />
          </S.SectionStart>

          <S.SectionStart>
            <h2>Comece por aqui</h2>
            <p>
              Fornecemos serviço de desenvolvimento de software de ciclo
              completo, abrangendo planejamento, definição de requisitos, design
              e prototipagem, desenvolvimento de software, teste, implantação e
              manutenção de aplicativos.
            </p>

            <Link href="/servicos">
              <button>Saiba mais</button>
            </Link>
          </S.SectionStart>
        </S.FirstSection>

        <S.SecondSection>
          <div>
            <h2>Nossos Serviços</h2>
            <div className="hLine"></div>
          </div>
          <S.SectionCards ref={carousel}>
            <Link href="">
              <div className="card">
                <div className="textCard">
                  <h3>UI/UX Design</h3>
                  <p>
                    Aumenta a experiência do usuário e a satisfação do cliente,
                    resultando no crescimento do negócio.
                  </p>
                </div>

                <Image src={Design} alt="design" />
              </div>
            </Link>

            <Link href="">
              <div className="card">
                <div className="textCard">
                  <h3>Marketing Digital</h3>
                  <p>
                    Somos uma empresa de marketing digital avançada no Brasil.
                    Criamos estratégias para divulgar sua marca, facilitando a
                    interação
                  </p>
                </div>

                <Image src={Marketing} alt="marketing" />
              </div>
            </Link>

            <Link href="">
              {" "}
              <div className="card">
                <div className="textCard">
                  <h3>Desenvolvimento de CRMs</h3>
                  <p>
                    É a ferramenta ou técnica que ajuda as empresas a fazer um
                    relacionamento saudável com seus clientes, organizando os
                    dados.
                  </p>
                </div>

                <Image src={Crms} alt="crms" />
              </div>
            </Link>

            <Link href="">
              <div className="card">
                <div className="textCard">
                  <h3>Desenvolvimento de sites</h3>
                  <p>
                    Envolve a construção e manutenção dos sites. Fuinciona
                    rapidamente com uma experiência de usuário firme.
                  </p>
                </div>

                <Image src={Sites} alt="sites" />
              </div>
            </Link>

            <Link href="">
              <div className="card">
                <div className="textCard">
                  <h3>Desenvolvimento mobile</h3>
                  <p>
                    É o ato de desenvolver aplicativos adequados para
                    dispositivos móveis que envolvem a escrita de software para
                    os mesmos.
                  </p>
                </div>

                <Image src={Mobile} alt="mobile" />
              </div>
            </Link>
          </S.SectionCards>

          <S.ButtonsCarousel>
            <button onClick={handleLeftClick}>
              <Image src={Chevron} alt="Scroll Left" />
            </button>

            <button onClick={handleRightClick}>
              <Image src={Chevron} alt="Scroll Left" />
            </button>
          </S.ButtonsCarousel>
        </S.SecondSection>

        <S.ThirdSectionEUA>
          <Image src={Eua} alt="" />
          <div>
            <h2> Lucas Tecnologia nos Estados Unidos</h2>
            <Link href="https://lucastechnologyservice.com/">
              <button> Saiba mais</button>
            </Link>
          </div>
        </S.ThirdSectionEUA>

        <S.FourthSection>
          <h2>Áreas de Atuação</h2>
          <div className="hLine"></div>

          <S.FourthSectionCards>
            <S.Card>
              <h3>Tecnologia</h3>
              <Image src={Tecnologia} alt="" />
            </S.Card>
            <S.Card>
              <h3>E-commerces</h3>
              <Image src={Ecommerces} alt="" />
            </S.Card>
            <S.Card>
              <h3>Mercado Financeiro</h3>
              <Image src={MercadoFinanceiro} alt="" />
            </S.Card>
            <S.Card>
              <h3>Hospitalar</h3>
              <Image src={Hospitalar} alt="" />
            </S.Card>
            <S.Card>
              <h3>Turismo</h3>
              <Image src={Turismo} alt="" />
            </S.Card>
            <S.Card>
              <h3>Educação</h3>
              <Image src={Educacao} alt="" />
            </S.Card>
          </S.FourthSectionCards>

          <S.FullWidthCard>
            <Image src={CloudSuite} alt="" />
            <h2>Gestão da sua empresa nas suas mãos</h2>
            <div className="hLine"></div>
          </S.FullWidthCard>
        </S.FourthSection>
      </div>
    </S.Container>
  );
}
