import styled from "styled-components";



export const Container = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    flex-direction: column;
    
    
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Poppins", sans-serif; 
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.025em;
  text-align: center;
  padding: 10px;
  margin-top: 15px;

  
`;

export const Mission = styled.p`
 
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.025em;
  text-align: center;
  margin: 10px;
  padding: 5px;
  
`;

export const Imag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Resources = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;


`;

export const Itens = styled.div`

display: flex;
gap: 20px;
width: 100%;
padding: 10px;
box-sizing: border-box;
justify-content: space-around;


`;