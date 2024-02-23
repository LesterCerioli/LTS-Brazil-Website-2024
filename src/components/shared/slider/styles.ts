import styled, { keyframes } from "styled-components";

const bannermove = keyframes`
    0% {
       transform: translateX(0);
    }
    100% {
       transform: translateX(-50%);
    }
`

export const Container = styled.section`
    width: 100%;
    overflow: hidden;
`

export const SliderContainer = styled.article`
    display: flex;
    width: 250%;
    overflow: hidden;
    justify-content: center;
    animation: ${bannermove} 20s linear infinite;
`

export const Slider = styled.div`
    width: 100%;
`

export const SliderList = styled.ul`
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin: 2.5rem;
    list-style: none;
    gap: 5rem;
`

export const Slide = styled.li`
    //width: 100%
    //perspective: 130px;
`

// img {
//     height: 100%;
//     width: 100%;
//     transition: transform 1s;
//   }
  
//   img:hover{
//     transform: translateZ(20px);
//   }
  
//   section {
//     width: 100%;
//     overflow: hidden;
//   }
  
//   article {
//     display: flex;
//     width: 250%;
//     overflow: hidden;
//     justify-content: center;
//     animation: bannermove 20s linear infinite;
//   }
  
//   article:hover {
//     -webkit-animation-play-state: paused;
//     animation-play-state: paused;
//   }
  
//   div {
//     width: 100%;
//   }
  
//   ul {
//     display: flex;
//     list-style-type: none;
//     padding-left: 0;
//     margin: 2.5rem;
//     gap: 5rem;
//   }
  
//   li {
//     width: 100%;
//     perspective: 130px;
//   }
  
//   @keyframes bannermove {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }
  