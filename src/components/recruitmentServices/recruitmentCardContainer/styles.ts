import { styled } from 'styled-components'

export const RecruitmentCardContainer = styled.div`
  max-width: 60vw;
  height: 40vw;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  div {
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #fff;
  }

  @media (max-width: 480px) {
    width: 480px;
    padding-bottom: 1500px;

    div {
      margin-left: -15px;
      width: 350px;
      height: 350px;
      margin-top: auto;
      margin-bottom: 35px;
      p {
        font-size: 18px;
      }
    }
  }
  @media screen and (min-width: 481) and(max-width: 768px) {
    max-width: 90vw;
    margin-left: 190px;

    padding: 30px;

    margin-bottom: 300px;

    div {
      font-size: 14px;
    }
  }
`
