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

    @media(max-width: 600px){
        display: none;
    }

`

export const SliderContainer = styled.article`
    display: flex;
    width: 250%;
    overflow: hidden;
    justify-content: center;
    animation: ${bannermove} 20s linear infinite;
    &:hover{
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
    }
`

export const Slider = styled.div`
    width: 100%;
`

export const SliderList = styled.ul`
    display: flex;
    padding-left: 0;
    margin: 1rem 2.5rem 1.5rem 2.5rem;
    gap: 5rem;
`

export const Slide = styled.li`
    width: 100%;
    list-style: none;
    perspective: 50px;
`

export const Img = styled.img`
    height: 100%;
    width: 100%;
    transition: transform 1s;
    &:hover{
        transform: translateZ(5px);
    }

    @media(max-width: 1024px){
        width: 130%;
    }

    @media(max-width: 768px){
        width: 200%;
    }

`