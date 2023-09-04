import styled from "styled-components";

export const Container = styled.header`
  background: #382EC4;
  text-align: center;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 0 20px 0 50px;

  @media (min-width: 1000px) and (max-width: 1300px) {
    width: 100%;
  }
`;

export const MajorLinksContainer = styled.div`
  width: 60%;
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  .bar {
    width: 30px;
    height: 3px;
    background-color: #FFF;
    margin: 4px 0;
  }

  &.open {
    
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 20px 0 20px; 
  transition: transform 0.3s ease-in-out;
  

  &.show-links {
    transform: translateY(0);
    display: flex;
  }

  @media (max-width: 1000px) {
    display: none;
    flex-direction: column; 
    transform: translateY(-100%);
  }
`;

export const Link = styled.a`
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
`;
