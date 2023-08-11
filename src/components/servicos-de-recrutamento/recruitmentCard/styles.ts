import styled, { keyframes } from 'styled-components'

const blue = keyframes`

  0% { 
    width: 0px;
    height: 0px;

  }
  100% {
    width: 450px;
    height: 300px;
    top: 0;
    left: 0;
  }

`

export const RecruitmentCard = styled.div`
  width: 450px;
  height: 300px;
  position: relative;
  background-color: rgb(2, 31, 62);
  border: 1px solid black;
  border-radius: 4px;
  padding: 50px;
  p,
  h2 {
    z-index: 10;
    position: relative;
  }

  &:hover {
    > div {
      position: absolute;
      background-color: rgb(5, 52, 98);
      animation-name: ${blue};
      animation-fill-mode: forwards;
      animation-duration: 1s;
      left: 50%;
      top: 50%;
    }
  }
`
