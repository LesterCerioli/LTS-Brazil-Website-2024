import styled from 'styled-components'

export const SubHero = styled.section`
  align-items: center;
  width: 100vw;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    margin: 50px;
  }

  h1 {
    font-size: 32px;
    font-weight: 200;
  }

  h4 {
    padding-top: 16px;
    font-weight: 300;
    width: 80vw;
  }
  @media screen and (max-width: 480px) {
    div {
      width: 480px;

      font-size: 20px;
    }
    section {
      width: 480px;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    section {
      width: 768px;

      height: auto;
      padding: 20px;
    }
  }
`
