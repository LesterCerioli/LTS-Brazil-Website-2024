import styled from 'styled-components'

export const DottedBar = styled.div`
  position: relative;
  width: 100%;

  > div {
    position: absolute;
    width: 100%;

    span {
      position: absolute;
      width: 100%;
      height: 3px;
      box-sizing: border-box;
      display: block;
      background-image: linear-gradient(to right, #000 1px, transparent 1px);
      background-size: 6px 1px;
    }

    span:nth-child(1) {
      margin-top: -280px;
      width: 1200px;
    }

    span:nth-child(2) {
      margin-top: -165px;
      width: 1200px;
    }

    span:nth-child(3) {
      margin-top: -50px;
      width: 1200px;
    }
    span:nth-child(4) {
      margin-top: -50px;
      width: 1200px;
    }

    span:nth-child(5) {
      margin-top: -170px;
      width: 2px;
      margin-left: -450px;
      height: 118px;
    }
    span:nth-child(6) {
      margin-top: -280px;
      width: 2px;
      margin-left: 1195px;
      height: 118px;
      background-image: linear-gradient(to top, #000 1px, transparent 1px);
      background-size: 130px 6px;
    }
    span:nth-child(7) {
      margin-top: -160px;
      width: 2px;
      margin-left: 0px;
      height: 118px;
      background-image: linear-gradient(to top, #000 1px, transparent 1px);
      background-size: 130px 6px;
    }
  }

  @media screen and (max-width: 480px) {
    > div {
      position: absolute;
      width: 100%;

      span:nth-child(1) {
        margin-top: -470px;
        width: 400px;
        margin-left: 15px;
      }

      span:nth-child(2) {
        margin-top: -335px;
        width: 400px;
        margin-left: 15px;
      }

      span:nth-child(3) {
        margin-top: -200px;
        width: 400px;
        margin-left: 15px;
      }
      span:nth-child(4) {
        margin-top: -65px;
        width: 400px;
        margin-left: 15px;
      }

      span:nth-child(5) {
        margin-top: -330px;
        width: 2px;
        margin-left: 15px;
        height: 120px;
        background-image: linear-gradient(to top, #000 1px, transparent 1px);
        background-size: 130px 6px;
      }

      span:nth-child(6) {
        margin-top: -460px;
        width: 2px;
        margin-left: 411px;
        height: 120px;
        background-image: linear-gradient(to top, #000 1px, transparent 1px);
        background-size: 118px 6px;
      }
      span:nth-child(7) {
        margin-top: -190px;
        width: 2px;
        margin-left: 411px;
        height: 120px;
        background-image: linear-gradient(to top, #000 1px, transparent 1px);
        background-size: 118px 6px;
      }
    }
  }
`
