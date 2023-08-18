import styled from 'styled-components'

export const CarrousselStyles = styled.div`
  padding-bottom: 80px;

  h1 {
    margin-top: 30px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  width: 100vw;

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
`
