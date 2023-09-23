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
  width: 100%;
  color: #000;
  box-sizing: border-box;

  @media(max-width:425px){
      margin: 60px auto 10px auto;
      background: #A9A9A9;
      border-radius: 35px;
      padding:15px;}
`

// export const Subtitle = styled.h2`
//   display: flex;
//   justify-content: center;
//   text-align: center;   
//   font-family: "Poppins", sans-serif; 
//   font-size: 20px;
//   line-height: 1.25;
//   letter-spacing: 0.025em;
//   padding-top: 20px;
//   margin: auto;
//   margin-bottom: 30px;
//   //margin-top: 10px;
//   width: 90%;
//   color: #000;
//   box-sizing: border-box;
// `

/*export const Imag = styled.div`
  
  
  //max-width: 1060px;
  width: 85%;
  box-sizing:border-box;
  margin: auto;
  margin-bottom: 40px;

    
`*/

//  export const Img = styled.img`
//  display: flex;
//  flex-direction: column;
//  justify-content:center;
//  align-items:center;
//  width: 100%;
//  `


export const Section = styled.div`

h3{
  display: flex;
  justify-content: center;
  text-align: center;   
  font-family: "Poppins", sans-serif; 
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.025em;
  padding-bottom: 40px;
  margin: auto;
  margin-top: 10px;
  width: 90%;
  color: #000;
  box-sizing: border-box;

  @media(max-width:425px){
      margin: auto auto;
      background: #A9A9A9;
      border-radius: 35px;
      padding:15px;

}
}
div, h2{
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 10px;
  margin-bottom: 10px;

  

}

a{
  text-decoration: none;
  color: black;
  font-family: "Poppins", sans-serif;
}

@media(max-width:425px){
      margin: auto auto;
      background: #A9A9A9;
      border-radius: 35px;
      padding:15px;}

`