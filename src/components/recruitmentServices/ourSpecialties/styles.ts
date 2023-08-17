import styled, { keyframes } from 'styled-components'

const blue = keyframes`

  0% { 
    width: 0px;
    height: 0px;

  }
  100% {
    width: 300;
    height: 300px;
    top: 0;
    left: 0;
  }

`

export const OurSpec = styled.div`
  width: 300px;
  height: 300px;
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  margin-left: 50px;

  &:hover {
    width: 310px;
    height: 310px;

    transition: width 1s, height 1s, background-color linear 0.5s;
  }
  div {
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      color: rgb(2, 31, 62);
      &:hover {
        color: rgb(5, 52, 98);

        transition: width 1s, height 1s, background-color linear 0.5s;
        h5 {
          color: #000;
        }
      }
    }
    p {
      font-size: 14px;
    }
  }
`
