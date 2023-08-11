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
      background-color: red;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
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
  }
`;

export const FirstSection = styled.div`
  height: 24.5rem;
  display: flex;
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
    font-size: 2.2rem;
    padding: 2rem;
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
`;

export const SectionStartImg = styled.div``;

export const SecondSection = styled.div`
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
    top: 15%; /* Posiciona o título a partir do centro vertical */
    transform: translateY(-50%); /* Centraliza verticalmente o título */
  }

  p {
    top: calc(50% + 1rem); /* Posiciona o parágrafo abaixo do título */
    transform: translateY(-50%); /* Centraliza verticalmente o parágrafo */
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
`;

export const FourthSection = styled.div`
  h2 {
    color: #021f3e;
    font-size: 2.2rem;
    text-align: center;
    padding: 1rem;
  }
`;

export const FourthSectionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: red;
`;

export const Card = styled.div`
  width: 200px;
  height: 100px;
  background: blue;
  border: 1px solid #000;
  padding: 10px;
`;
