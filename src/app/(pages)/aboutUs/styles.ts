import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  margin: 4rem 0;
  min-height: 100vh;
`;

export const Title = styled.div`
  h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
    text-align: center;
    color: #021F3E;
    font-weight: bold;
  }

  .hline {
    border-bottom: 2px solid lightgray;
    margin: 0 1rem;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
      margin: 1.5rem 0;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const BigCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BigCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1.5rem; 
  background-color: #f9f9f9;
  font-size: 1.5rem; 

  @media screen and (max-width: 800px) {
    padding: 1rem; 
    font-size: 1rem; 
  }
`;

export const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  margin: auto auto; 

  @media screen and (max-width: 800px) {
    gap: 1rem; 
    margin: 0; 
  }
`;

export const SmallCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem; 
  background-color: #f9f9f9;
  font-size: 1rem; 

  @media screen and (max-width: 800px) {
    padding: 1rem; 
  }
`;

export const SmallTitle = styled.h5`
  margin-bottom: 0.5rem;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  padding: 3rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 2rem;
  }
`;

export const CardDown = styled.div`
  display: grid;
  font-size: 2rem;
  margin: 2rem;
`;
