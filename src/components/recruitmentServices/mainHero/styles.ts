import styled from 'styled-components'
import { Section } from '../../../app/(pages)/aboutUs/styles'

export const MainHero = styled.section`
  align-items: center;
  width: 100vw;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h4 {
    text-align: center;

    font-weight: 300;
    padding-top: 5vw;
    margin: 0px 50px 50px 50px;
    line-height: 1.5;
  }

  @media screen and (max-width: 480px) {
    section {
      width: 500px;
    }

    div {
      width: 580px;
      padding-bottom: 50px;
    }

    .carousel-root {
      width: 480px;
      height: 480px;
    }
  }
  @media screen and(min-width: 481) and(max-width: 768px) {
    div {
      width: 950px;
      padding-bottom: 50px;
    }

    .carousel-root {
      max-width: 100%;
    }
  }
  @media screen and(min-width: 481) and(max-width: 768px) {
    div {
      width: 950px;
      padding-bottom: 10px;
    }

    .carousel-root {
      width: 950px;
      height: 950px;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;
    }
  }
`
