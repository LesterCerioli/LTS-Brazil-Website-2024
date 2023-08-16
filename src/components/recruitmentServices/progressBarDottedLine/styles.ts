import styled from 'styled-components'

export const DottedBar = styled.div`
  position: relative;
  width: 100%;
  margin-right: 160px;

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
      width: 1100px;
      margin-left: -350px;
    }

    span:nth-child(2) {
      margin-top: -165px;
      width: 1200px;
      margin-left: -450px;
    }

    span:nth-child(3) {
      margin-top: -50px;
      width: 1050px;
      margin-left: -450px;
    }

    span:nth-child(4) {
      margin-top: -170px;
      width: 2px;
      margin-left: -450px;
      height: 118px;
      background-image: linear-gradient(to top, #000 1px, transparent 1px);
      background-size: 130px 6px;
    }

    span:nth-child(5) {
      margin-top: -280px;
      width: 2px;
      margin-left: 750px;
      height: 118px;
      background-image: linear-gradient(to top, #000 1px, transparent 1px);
      background-size: 118px 6px;
    }
  }
`
