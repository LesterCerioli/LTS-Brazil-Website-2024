import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 5rem 0;

 h1 {
  padding: 1rem 0;
  border-bottom: 5px solid lightgray;
  margin: 0 34rem; 
}

.title {
  margin: 0 16rem
}

.text {
  margin: 5rem;
  font-family: "Montserrat", arial, sans-serif;
  font-size: 22px;
}

@media (max-width: 600px) {
  width: 80%;
  > h1 {
    font-size: 14px;
  }
}
`;