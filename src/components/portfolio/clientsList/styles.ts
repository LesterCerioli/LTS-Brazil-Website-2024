import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2em;
`

export const Card = styled.div` 
    width: 280px;
    margin: 15px;
    
`

export const Header = styled.div`
    border-radius: 10px 10px 0px 0px;
    background-color: var(--blue);
    text-align: center;
`
 export const StyledImage = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`
export const Footer = styled.div`
    background: var(--white);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 25px;
`