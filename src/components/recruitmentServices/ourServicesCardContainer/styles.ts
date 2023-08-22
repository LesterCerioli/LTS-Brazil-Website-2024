import { styled, keyframes } from 'styled-components'

const slide = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}

`

export const ServicesCardContainer = styled.div`
  width: 100vw;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;

  div {
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slide};
    margin: 20px;
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (max-width: 480px) {
    padding-top: 50px;
    margin-top: 50px;
    width: 480px;
    height: auto;
    font-size: 20px;

    div {
      width: 480px;
    }
  }
  @media screen and (min-width: 481) and(max-width: 768px) {
    padding-top: px;
    width: 850px;
    height: auto;
    margin-left: 50px;
  }
`
