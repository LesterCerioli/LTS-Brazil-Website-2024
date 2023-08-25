"use client";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    max-width: 100%;
    height: fit-content;
    justify-content: space-between; 
    align-items: flex-start;
    background-color: transparent;
    z-index: 1000;
    
    @media (min-width: 1000px) and (max-width: 1300px) {
      align-content: center;
    }
    
    @media (max-width: 1340px) {
      z-index: 1000;
      justify-content: space-between;
      max-width: 100%;
      flex-wrap: wrap;
    
      .show {
      display: flex;
    }
      .navbar {
      padding-right: 50px; 
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
`

export const LeftContainer = styled.div`
    display: flex;
    min-width: 40%;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
    flex-wrap: wrap;
    height: fit-content;
    
    @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    top: 0px;
    padding-top: 20px;
    right: 0;
    width: 100%;
    height: 200px;
    background-color: var(--white);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.show {
      transform: translateX(0);
    }
  }

`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #1B1B1B;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  padding-bottom: 10px;
`;

export const LogoContainer = styled.div`
    max-width: 20%;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    height: 200px;
    align-items: center; 
    justify-content: space-around;    
    
    @media (max-width: 1000px) {
        max-height: 100%;
        max-width: 100%;
       justify-content: flex-start;
       padding-top: 0;
       gap: 10px;
    }
`
    export const ContactLink = styled.a`
        color: #1B1B1B;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; 
        display: flex;
        text-decoration: none;

        
    `

export const RightContainer = styled.div`
    display: flex;
    min-width: 40%;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
    flex-wrap: wrap;
    height: fit-content;

    
    @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    top: 200px;
    padding-top: 30px;
    right: 0;
    width: 100%;
    height: 230px;
    background-color: var(--white);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.show {
      transform: translateX(0);
    }
  }
`

export const NavBarFixed = styled.nav`
    position: fixed;
    background-color: black;
    transition: .3s ease-in-out;
`

export const HamburgerMenu = styled.div`
  display: none;
  padding-top: 8px;
  @media (max-width: 1000px) {
    display: block;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding-left: 10px;
    padding-top: 10px;
    z-index: 1001;

    .bar {
      width: 25px;
      height: 3px;
      margin: 3px 0;
      background-color: #1B1B1B;
      transition: 0.3s;
    }
    &.show {
      transform: translateX(0);
    }

    &.open {
      .bar {
        &:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }
`;
