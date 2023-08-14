import styled from "styled-components";


export const Container = styled.div`
  background-color: #EEEDED;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 0;

  > h1 {
    font-size: 48px;
    border-bottom: 3px solid #9E9FA5;
    padding: 1em 0;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
