import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 380px;
  height: 600px;
  width: 100%;

  margin: 0 auto;

  text-align: center;
`;

export const Title = styled.h3``;

export const Image = styled.div`
  max-width: 375px;
  max-height: 375px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(2, 31, 62, 0.45);
  -moz-box-shadow: 10px 10px 5px 0px rgba(2, 31, 62, 0.45);
  box-shadow: 10px 10px 5px 0px rgba(2, 31, 62, 0.45);
`;

export const Description = styled.p`
  margin-top: 2rem;
`;
