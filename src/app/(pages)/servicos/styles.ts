import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;

  > h1 {
    margin-bottom: 3rem;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 7rem 5rem;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
