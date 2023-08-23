import styled from 'styled-components'

export const CarrousselStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  width: 100vw;
  padding-bottom: 80px;

  h1 {
    margin-top: 30px;
  }
  h4 {
    font-weight: 500;
  }
  .carousel-root {
    width: 100%;
    max-width: 1080px;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    max-width: 480px;
    height: auto;
    h4 {
      width: 480;
      font-weight: 500;
      font-size: 20px;
    }
    .carousel-root {
      width: 460px;
      height: 460px;
    }
  }
  @media screen and (max-width: 768px) {
    h4 {
      font-weight: 600;
    }
  }
`
