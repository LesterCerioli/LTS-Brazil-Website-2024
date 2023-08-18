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
    transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled.div`
  height: 720px;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    object-fit: cover;
    z-index: 0;
  }

  .containerTitle {
    background: rgba(255, 255, 255, 0.65);
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  @media screen and (max-width: 600px) {
  }
`;

export const TextTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  height: 100%;
  margin: auto;
  padding-bottom: 100px;

  z-index: 99;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-family: "Archivo Black", arial, sans-serif;
    font-size: 3.4rem;
  }

  p {
    text-align: center;
    font-family: "Montserrat", arial, sans-serif;
    font-style: italic;
    font-size: 22px;
    margin: 20px;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 100%;

    h1 {
      font-size: 30px;
    }
  }
`;

export const StartHere = styled.div`
  height: 24.5rem;
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 45rem;

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
    margin: 1rem 0 0;
    margin-left: 2rem;
    color: #021f3e;
    background-color: white;
  }
  @media screen and (max-width: 600px) {
    flex: 0;
    padding-bottom: 2rem;

    h2 {
      font-size: 28px;
      padding-left: 1rem;
    }

    p {
      padding-left: 1rem;
      margin: 10px;
    }

    button {
      width: 80%;
      height: 60px;
    }
  }
`;

export const OurServices = styled.div`
  padding: 2rem;
  margin-top: 80px;

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

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const ButtonsCarousel = styled.div`
  width: 100%;
  text-align: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    padding: 0;
    border-radius: 0;
  }
  button:first-child img {
    transform: rotate(180deg);
  }
`;

export const SectionCards = styled.div`
  height: 400px;
  width: 1200px;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 5px;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .card {
    width: 370px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all ease-in-out 0.2s;
  }

  .card:hover {
    transform: scale(1.01);
  }

  .textCard {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    height: auto;
    border-radius: 16px;
  }

  h3,
  p {
    position: absolute;
    text-align: center;
    color: white;
    padding: 1rem;
    z-index: 2;
    text-align: left;
  }

  h3 {
    top: 65%;
    transform: translateY(-50%);
  }

  p {
    top: calc(68% + 4rem);
    transform: translateY(-50%);
    line-height: 1.5;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-lef: 0;
    gap: 0.8rem;

    .card {
      width: 350px;
      margin-left: 10px;
    }

    img {
      height: auto;
    }

    h2 {
      font-size: 12px;
    }
  }
`;

export const SiteEua = styled.div`
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
    height: 150px;

    img {
      object-fit: none;
      object-position: left center;
    }

    h2 {
      font-size: 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const AreasOfExpertise = styled.div`
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

export const AreasOfExpertiseCards = styled.div`
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
  transition: all ease-in-out 0.2s;

  img {
    padding: 5px 5px;
  }

  h3 {
    font-size: 22px;
    font-family: "Montserrat", arial, sans-serif;
    font-weight: 100;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

export const CloudSuite = styled.div`
  width: 80%;
  margin: auto;
  padding: 40px 40px;
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
    transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.08);
    }
  }
  @media screen and (max-width: 600px) {
    img {
      width: 370px;
      height: auto;
    }

    h2 {
      font-size: 25px;
    }
  }
`;

export const Cokkies = styled.div`
  height: 100vh;
  position: sticky;
  bottom: 20px;
  right: 20px;

  z-index: 100;
`;
