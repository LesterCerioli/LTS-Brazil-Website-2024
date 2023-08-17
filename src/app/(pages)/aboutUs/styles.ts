import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Title = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    font-size: 3.4rem;
    margin-top: 3rem;
    color: #021F3E;
  }

  .hline {
    border-bottom: 2px solid lightgray;
    margin: 0.5rem auto;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    h1 {
      font-size: 30px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  .img {
    width: 100%;
    height: auto;
  }
`;

export const SectionContent = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2rem;
  max-width: 800px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const SecondComponent = styled.div`
  background-color: #F6F6F6;
`;

export const SecondTitle = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    font-size: 3.4rem;
    margin-top: 3rem;
    color: #021F3E;
  }

  .htowline {
    border-bottom: 2px solid lightgray;
    margin: 0.5rem auto;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;

    .img {
      width: 100%;
      height: auto;
    }

    h1 {
      font-size: 30px;
    }

    margin: 1rem 0;
  }
`;

export const SecondElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;

  @media screen and (min-width: 601px) {
    flex-direction: row;
  }
`;

export const TextElement = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  max-width: 800px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
