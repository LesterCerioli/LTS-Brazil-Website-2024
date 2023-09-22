import styled from "styled-components"



export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height:100%;
  padding:0;
  margin:0;
`
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;   
  font-family: "Poppins", sans-serif; 
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.025em;
  padding-top: 20px;
  margin-top: 60px;
  width: 90%;
  color: #000;
  box-sizing: border-box;
`

export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;   
  font-family: "Poppins", sans-serif; 
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: 0.025em;
  padding-top: 20px;
  margin: auto;
  margin-bottom: 30px;
  //margin-top: 10px;
  width: 90%;
  color: #000;
  box-sizing: border-box;
`

export const Imag = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  max-width: 1060px;
  //max-height: 450px;
  box-sizing:border-box;
  margin: auto;
  margin-bottom: 40px;
    
`

// export const Img = styled.img`
// width: 9%;
// `


export const Section = styled.div`
div, h2, a{
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 10px;
  margin-bottom: 10px;

}
`