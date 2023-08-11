import styled from 'styled-components'

export const DifferentialsText = styled.section`
  margin: 2rem;
  justify-content: center;
  align-items: center;
  max-width: 100vw;

  h1 {
    text-align: center;
    color: #fff;
    padding: 50px;
    text-transform: uppercase;
    font-weight: 100;
    font-size: 30px;
  }

  div {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

    :nth-child(1),
    :nth-child(2),
    :nth-child(3),
    :nth-child(4) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #fff;
      border-radius: 10px;
      margin: 5px 50px 50px 50px;
      width: 30vw;

      p {
        margin-top: -15px;
      }
      h3 {
        margin-top: 10px;
      }
    }
  }
`
