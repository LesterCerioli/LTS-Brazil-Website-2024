import styled from "styled-components";

export const Container = styled.div`
  button {
    text-transform: uppercase;
    padding: 12px 25px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.071em;
    font-size: 14px;

    &:hover {
      /* background-color: var(--blue-hover); */
      transition: all ease-in-out 0.2s;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 24.25rem;
  margin: auto;

  h1 {
    color: var(--blue);
    text-transform: uppercase;
    text-align: center;
    font-family: "Archivo Black", arial, sans-serif;
    font-size: 3.4rem;
  }

  p {
    color: rgb(5, 52, 98);
    text-align: center;
    font-family: "Montserrat", arial, sans-serif;
    font-style: italic;
    font-size: 1.4rem;
    margin: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    h1 {
      font-size: 30px;
    }
  }
`;

export const FirstSection = styled.div`
  height: 24.5rem;
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      height: auto;
    }
  }
`;

export const SectionStart = styled.div`
  flex: 1;
  background-color: #021f3e;

  img {
    max-width: 100%;
    max-height: 100%;
    padding: 0;
  }

  h2 {
    color: white;
    font-size: 2.44rem;
    padding: 3rem 2rem 1rem 2rem;
    font-family: "Archivo Black", arial, sans-serif;
  }

  p {
    color: #a4afc9;
    font-family: "Montserrat", arial, sans-serif;
    font-size: 22px;
    line-height: 1.5;
    margin-top: 20px;
    padding-left: 2rem;
    letter-spacing: 0.12rem;
  }

  button {
    margin: 2rem 0 0;
    margin-left: 2rem;
    color: #021f3e;
    background-color: white;
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 28px;
    }
  }
`;

// export const SectionStartImg = styled.div``;

export const SecondSection = styled.div`
  padding: 2rem;
  h2 {
    color: #021f3e;
    font-family: "Archivo Black", arial, sans-serif;
    font-size: 39px;
    text-align: center;
    padding: 1rem;
    position: relative;
  }

  .hLine {
    border-bottom: 3px solid #dadada;
    width: 150px;
    margin: auto;
  }
`;

export const SectionCards = styled.div`
  height: 286.4px;
  padding: 2.5rem 4rem;
  display: flex;
  gap: 1rem;

  .card {
    width: 370px;
    position: relative;
  }

  .textCard {
    width: 100%;
    height: 128%;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
  }

  h3,
  p {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    padding: 1rem;
    z-index: 2;
  }

  h3 {
    top: 15%;
    transform: translateY(-50%);
  }

  p {
    top: calc(50% + 1rem); /* Posiciona o parágrafo abaixo do título */
    transform: translateY(-50%); /* Centraliza verticalmente o parágrafo */
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      height: auto;
    }

    h2 {
      font-size: 12px;
    }
  }
`;

export const ThirdSection = styled.div`
  display: flex;
  height: 16rem;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 2.2rem;
    text-align: center;
    padding: 1rem;
    z-index: 2;
  }

  button {
    z-index: 2;
    background-color: #fff;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      height: auto;
    }

    h2 {
      font-size: 12px;
    }
  }
`;

export const FourthSection = styled.div`
  padding-top: 2rem;
  h2 {
    color: #021f3e;
    font-family: "Archivo Black", arial, sans-serif;
    font-size: 39px;
    text-align: center;
    padding: 1rem;
    position: relative;
  }

  .hLine {
    border-bottom: 3px solid #dadada;
    width: 150px;
    margin: auto;
  }
`;

export const FourthSectionCards = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 2rem;

  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    padding: 5px 5px;
  }

  h3 {
    font-size: 22px;
    font-family: "Montserrat", arial, sans-serif;
    font-weight: 100;
  }
`;

export const FullWidthCard = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #021f3e;
    font-family: "Archivo Black", arial, sans-serif;
    font-size: 39px;
    text-align: center;
    padding: 1rem;
    position: relative;
  }

  .hLine {
    border-bottom: 3px solid #dadada;
    width: 150px;
    margin: auto;
  }

  img {
    height: 583px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 120%;
      height: auto;
    }

    h2 {
      font-size: 25px;
    }
  }
`;