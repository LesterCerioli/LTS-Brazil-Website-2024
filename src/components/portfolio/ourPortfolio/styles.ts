import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 537px;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
`

export const Title = styled.h1`
    color: var(--blue);
    border-bottom: 2px solid var(--white);
    display: inline-block;
    padding-bottom: 8px;
    text-align: center;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 58.8px; 

`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;

`

export const Subtitle = styled.h4`
    color: #5E5E5E;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; 

`