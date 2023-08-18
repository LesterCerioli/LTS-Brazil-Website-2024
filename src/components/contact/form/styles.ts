import styled from 'styled-components'

export const Form = styled.div`
    

    div{
        font-family: Montserrat, arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100vw;
        
        
     
 }

`;


export const Title = styled.div`
    h1{
        font-size: 40px;
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
    input, textarea {
font-family: Montserrat, arial, sans-serif;
margin-top: 20px;
outline: none;
padding: 15px;
width: 750px;
border: 1px solid #E2E2E2;
border-radius: 10px;

}

textarea{

margin-bottom: 30px;
}

input:hover{
transition: 0.8s;
transform: scale(1.03);
}

textarea:hover{
transition: 0.8s;
transform: scale(1.03);
}

`;

export const FirstButton = styled.div`
   button{
    width: 150px;
    height: 50px;
    background-color: #021F3E;
    color: #FFF;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    cursor: pointer;
    padding: 10px;
    margin-bottom:15px;
    border: none;
    
   }

   button:hover{
    transition: 0.8s;
    transform: scale(1.05);
   }

`;

export const GooglePrivacy = styled.div`
.privacidade{
    font-family: Montserrat, Arial, sans-serif;
    font-size: 11px;
    color: #595959;
    margin-bottom: 60px;
    text-decoration: none;
   }
`;

export const Text = styled.div`
.sucesso{
        color: #1B1B1B;
        font-size: 22px;
        font-weight: 400;
        margin-top: 30px;
        
    }
`;
export const SecondButton = styled.div`
.mensagem{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: #021F3E;
    color: #FFF;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    outline: none;
    cursor: pointer;
    padding: 0 15px;
    margin: 30px ;
}

button:hover{
    transition: 0.8s;
    transform: scale(1.05);
}

`;

export const Name = styled.div`
.name{
    color: #1B1B1B;
    font-size: 22px;
    font-weight: 400;
    margin: 20px;
}
`;

export const Address = styled.div`
.endereco{
    color: #021F3E;
    font-size: 20px;
    margin: 30px;
    
}
`;

export const Email = styled.div`
a{
    color: #021F3E;
    text-decoration: none
}
`;

export const Map = styled.div`
margin-top: 40px;
`;




