import styled from 'styled-components'

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  ul {
    align-items: center;
  }

  li {
    position: relative;
    display: inline-block;
    width: 19%;
    position: relative;
    z-index: 999;

    div {
      width: 60px;
      height: 60px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: rgb(2, 31, 62);
      color: #fff;
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;
      -webkit-transition: 0.3s linear;
      -o-transition: 0.3s linear;
      transition: 0.3s linear;
      overflow: hidden;
    }
  }

  p {
    font-size: 16px;
    text-align: left;
  }
  div {
  }
`
