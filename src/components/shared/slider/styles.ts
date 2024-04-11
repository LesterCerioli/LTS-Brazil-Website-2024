import styled, { keyframes } from "styled-components";

const scroll = keyframes`
    to {
        transform: translate(calc(-50%));
    }
`

export const Scroller = styled.div`
    overflow: hidden;
    max-width: 100%;
    margin: 0;
    &[data-direction="right"] {
        --_animation-direction: reverse;
    }
    &[data-direction="left"] {
        --_animation-direction: forwards;
    }
    &[data-speed="fast"] {
        --_animation-duration: 20s;
    }
    &[data-direction="slow"] {
        --_animation-duration: 60s;
    }
`

export const ScrollerInner = styled.div`
    padding-block: 1rem;
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
    height: fit-content;
    width: max-content;
    flex-wrap: nowrap;
    animation: ${scroll} var(--_animation-duration, 40s)
        var(--_animation-direction, forwards) linear infinite;
    &:hover{
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
    }
`

export const Img = styled.img`
    /* &:hover{
        transform: translateZ(5px);
     } */
`