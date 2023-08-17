import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
}
`;

export const Title = styled.div`
  
h1 {
  display: flex;
  justify-content: center;
  font-size: 3.4rem;
  margin-top: 5rem;
  color: #021F3E;
}

.hline {
  border-bottom: 2px solid lightgray;
  margin: 0.5rem 44rem;
  margin-bottom: 3rem;
}

@media screen and (max-width: 600px) {
  width: 80%;
  h1 {
    font-size: 30px;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 6rem;
  gap: 6rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      height: auto;
    }
  }
`;

export const SectionContent = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 4rem;
`;

export const SecondComponent = styled.div`
  background-color: #F6F6F6;
`

export const SecondTitle = styled.div`
h1 {
  display: flex;
  justify-content: center;
  font-size: 3.4rem;
  margin-top: 5rem;
  color: #021F3E;
}

.htowline {
  border-bottom: 2px solid lightgray;
  margin: 0.5rem 36rem;
  margin-bottom: 4rem;
}
`

export const SecondElement = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 6rem;
  gap: 6rem;
`;

export const TextElement = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`;

