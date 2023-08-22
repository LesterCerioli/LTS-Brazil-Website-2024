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
  border-radius: 5px;
  padding: 50px;
  p,
  h2 {
    z-index: 10;
    position: relative;
  }
  &:hover {
    width: 480px;
    height: 350px;
    background-color: rgb(5, 52, 98);
    transition: width 1s, height 1s, background-color linear 0.5s;
  }

  @media screen and (max-width: 480px) {
    div {
      width: 225px;
      height: 150px;
      padding: 5px;
      margin-top: 15px;
    }
    &:hover {
      width: 225px;
      height: 150px;
      background-color: rgb(5, 52, 98);
      transition: width 1s, height 1s, background-color linear 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      width: 50%;
      height: 50%;
      padding: 15px;
      padding-bottom: 300px;
      margin-top: 15px;
    }

    &:hover {
      width: 100%;
      height: auto;
    }
  }
`
