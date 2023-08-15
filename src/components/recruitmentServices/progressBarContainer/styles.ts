import styled from 'styled-components'

export const ProBarContainer = styled.div`
  width: 100%;
  padding-top: 36px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    width: 300px;

    justify-content: space-around;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
  h1 {
    padding: 32px;
    margin-bottom: 30px;
  }
`
