import { styled, keyframes } from "styled-components";

const slideRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}

`
const slideLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}

`

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 20px;
    overflow: hidden;
    max-width: 80%;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};

    @media (max-width: 425px) {
        margin: 20px 0 20px 0;
        background: #A9A9A9;
        border-radius: 35px;
    }
`

export const Title = styled.h1`
  color: #000;
  font-family: Rubik;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

@media (min-width: 426px) and (max-width: 768px) {
    font-size: 36px;
  }

@media (max-width: 425px) {
    font-size: 24px;
  }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    min-width: 90%;
    height: 403px;
    border-radius: 10px;
    background: url('/assets/imagesCRM/background_hero_1.png') no-repeat;
    background-size: cover;
    background-position: center;
`
export const Hero = styled.img`
  max-width: 70%;
  height: 100%;

  @media (max-width: 425px){
    display: none;
  }
`;

export const SubtitleContainer = styled.div`
  max-width: 90%;
  margin: 20px 0 20px 0;
`

export const Subtitle = styled.h5`
    color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 152.875%; /* 33.632px */
  letter-spacing: 0.55px;
`

export const CardContainer = styled.div`
    background: url('/assets/imagesCRM/background_hero_2.png') no-repeat;
    background-size: cover;
    background-position: center;
    max-width: 90%;
    min-height: 302px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};

    @media (min-width: 426px) and (max-width: 624px) {
      width: 100%;
    }

    @media (max-width: 425px){
      animation-name: ${slideLeft};
    }
`

export const SecondCardContainer = styled.div`
    background: url('/assets/imagesCRM/background_hero_3.png') no-repeat;
    background-size: cover;
    background-position: center;
    max-width: 90%;
    min-height: 302px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideLeft};

    @media (min-width: 426px) and (max-width: 624px) {
      width: 100%;
    }

    @media (max-width: 425px){
      animation-name: ${slideLeft};
    }
`

export const Card = styled.div`
    display: flex;
    text-align: center;
    max-width: 45%;
    height: 230px;
    border-radius: 0px 10px 10px 0px;
    background: rgba(255, 255, 255, 0.70);
    

    /*&:hover {
    width: 240px;
    height: 240px;
    background-color: rgb(90, 90, 90);
    transition: width 1s, height 1s, background-color linear 0.5s;
  }*/
`
export const CardText = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 152.875%; /* 36.69px */
  letter-spacing: 0.6px;
`