import styled from "styled-components";

export const Posts = styled.div`
  h1 {
    margin-top: 35px;
  }
  background-color: lightgrey;
  width: 80%;
  margin: 150px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const Article = styled.article`
  width: 90%;
  border: 1px black;
  align-items: center;

  margin-bottom: 50px;
  h2 {
    margin: 50px;
    padding-top: 50px;
  }
  p {
    margin: 55px;
  }
  span {
    font-size: 10px;
    margin-left: 93%;
  }
`;
