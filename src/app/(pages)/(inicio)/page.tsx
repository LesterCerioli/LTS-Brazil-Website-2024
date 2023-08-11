"use client";
import React from "react";
import Image from "next/image";
import * as S from "./styles";
import CapaEnglosite from "@/assets/imagensInicio/capaEnglosite.png";
import Design from "@/assets/imagensInicio/design.png";
import Crms from "@/assets/imagensInicio/crms.png";
import Marketing from "@/assets/imagensInicio/marketing.png";
import Mobile from "@/assets/imagensInicio/mobile.png";
import Sites from "@/assets/imagensInicio/sites.png";
import d from "../../../assets/imagensInicio/digitandoMouseTeclado2.png";

export default function Home() {
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
            <button>Saiba mais</button>
          </S.SectionStart>
        </S.FirstSection>

        <S.SecondSection>
          <div>
            <h2>Nossos Serviços</h2>
            <div className="hLine"></div>
          </div>
          <S.SectionCards>
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
            <div className="card">
              <div className="textCard">
                <h3>Desenvolvimento mobile</h3>
                <p>
                  É o ato de desenvolver aplicativos adequados para dispositivos
                  móveis que envolvem a escrita de software para os mesmos.
                </p>{" "}
              </div>

              <Image src={Mobile} alt="mobile" />
            </div>
          </S.SectionCards>
        </S.SecondSection>

        <S.ThirdSection>
          <Image src={d} alt="" />
          <div>
            <h2> Lucas Tecnologia nos Estados Unidos</h2>
            <button> Saiba mais</button>
          </div>
        </S.ThirdSection>

        <S.FourthSection>
          <h2>Áreas de Atuação</h2>
          <S.FourthSectionCards>
            <S.Card>
              <h3>Tecnologia</h3>
              <p>imagem</p>
            </S.Card>
            <S.Card>
              <h3>E-commerces</h3>
              <p>imagem</p>
            </S.Card>
            <S.Card>
              <h3>Mercado Financeiro</h3>
              <p>imagem</p>
            </S.Card>
            <S.Card>
              <h3>Hospitalar</h3>
              <p>imagem</p>
            </S.Card>
            <S.Card>
              <h3>Turismo</h3>
              <p>imagem</p>
            </S.Card>
            <S.Card>
              <h3>Educação</h3>
              <p>imagem</p>
            </S.Card>
            <div>Gestão da sua empresa nas suas mãos</div>
          </S.FourthSectionCards>
        </S.FourthSection>
      </div>
    </S.Container>
  );
}
