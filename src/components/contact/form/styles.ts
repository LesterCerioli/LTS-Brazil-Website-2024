import styled from 'styled-components'

export const Container = styled.div`
    

form{
font-family: Montserrat, arial, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
margin: 0 auto;
max-width: 98%;  
 }

`;


export const Title = styled.div`
h1{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 2.5rem;
color: #021F3E;
margin: 30px 40px;

    }

.line{
border-bottom: 2px solid #E2E2E2;
width: 50px;
margin: 20px 30px;
    
}  
`;

export const Data = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 90%;
margin: 0 auto;
gap: 3px;

input{
font-family: Montserrat, arial, sans-serif;
margin-top: 1.25rem;
outline: none;
padding: 1rem;
width: 90%;
border: 1px solid #E2E2E2;
border-radius: 0.625rem;

} 

textarea {
font-family: Montserrat, arial, sans-serif;
margin-top: 1.25rem;
outline: none;
padding: 1rem;
width: 90%;
border: 1px solid #E2E2E2;
border-radius: 0.625rem;
margin-bottom: 2rem;

}



input:hover{
transition: 0.8s;
transform: scale(1.03);
}

textarea:hover{
transition: 0.8s;
transform: scale(1.03);
}


@media screen and (min-width: 480px) and (max-width: 1024px)
{
     input{
        max-width:98%;
     }
    
    textarea{
        max-width: 98%;
     }
      
    }

`;

export const FirstButton = styled.div`
button{
    width: 9.5rem;
    height: 3.2rem;
    background-color: #021F3E;
    color: #FFF;
    border-radius: 0.65rem;
    font-size: 0.95rem;
    outline: none;
    cursor: pointer;
    padding: 0.65rem;
    margin-bottom:2rem;
    border: none;
    
}

   button:hover{
    transition: 0.8s;
    transform: scale(1.05);
   }

`;

export const GooglePrivacy = styled.div`
.privacidade{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Montserrat, Arial, sans-serif;
font-size: 0.69rem;
color: #595959;
margin-bottom: 3.75rem;
text-decoration: none; 
padding: 5px;
}
`;

export const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 1.88rem;
width: 98%;
    
    
   

  h4{ 
    text-align: center;
    color: #1B1B1B;
    font-size: 1.38rem;
    font-weight: 400;
    width: 98%;

    
}      
    
`;
export const SecondButton = styled.div`
.mensagem{
display: flex;
justify-content: space-around;
align-items: center;
width: 12.5rem;
height: 3.125rem;
background-color: #021F3E;
color: #FFF;
border-radius: 0.625rem;
border: none;
font-size: 0.94rem;
outline: none;
cursor: pointer;
padding: 0 15px;
margin: 30px;
}

button:hover{
transition: 0.8s;
transform: scale(1.05);
}
`;

export const Name = styled.div`
.name{
    color: #1B1B1B;
    font-size: 1.38rem;
    font-weight: 400;
    margin: 10px;
}
`;

export const Address = styled.div`
.endereco{
    color: #021F3E;
    font-size: 1.25rem;
    margin: 50px ;
    
}
`;

export const Email = styled.div`
a{
    
    color: #021F3E;
    text-decoration: none;
    width: 98%;   
}
`;

export const Map = styled.div`
margin-top: 2.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
margin: 0;
padding: 10px;
border: none;

`;





