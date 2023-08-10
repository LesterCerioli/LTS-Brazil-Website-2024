"use client";
import * as S from "./styles";

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
            <h3>imagem</h3>
            <img src="/public/imagensInicio/capa1_englosite.png" alt="" />
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
          </div>
          <S.SectionCards>
            <p>cards</p>
          </S.SectionCards>
        </S.SecondSection>

        <S.ThirdSection>
          <h2> Lucas Tecnologia nos Estados Unidos</h2>
          <button> Saiba mais</button>
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
