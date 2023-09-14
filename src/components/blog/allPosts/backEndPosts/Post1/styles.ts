import styled from "styled-components";

export const PostStylesMainContainer = styled.div`
  width: 75vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 150px;
  margin-left: 150px;
  margin-bottom: 150px;

  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.25);
`;

export const TextContainer = styled.div`
  width: 45vw;
  margin-bottom: 150px;
  h1 {
    margin-top: 30px;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 30px;
  }
`;
