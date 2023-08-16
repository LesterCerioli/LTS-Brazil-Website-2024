import styled from 'styled-components'

export const Form = styled.label`
    

    div{
        
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
         
        
    }

    .convite{
        font-size: 28px;
        color: #021F3E;
        margin: 30px 40px;

    }

    .line{
    border-bottom: 2px solid #E2E2E2;
    width: 50px;
    margin: 20px 30px;
    
   }


    input, textarea {

        margin-top: 20px;
        outline: none;
        padding: 15px;
        width: 750px;
        border: 1px solid #E2E2E2;
        border-radius: 10px;
        
            
    }

    textarea{

        margin-bottom: 15px;
    }

    input:hover{
        transition: 0.8s;
        transform: scale(1.03);
    }

    textarea:hover{
        transition: 0.8s;
        transform: scale(1.03);
    }


   .contato{
        font-family: Montserrat, Arial, sans-serif;
        color: #1B1B1B;       
        font-weight: 1px;
        font-size: 22px;
        margin: 40px;

}

 


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
    
   }



   button:hover{
    transition: 0.8s;
    transform: scale(1.05);
   }

   .mensagem{
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
   }

   

   .privacidade{
    font-family: Montserrat, Arial, sans-serif;
    font-size: 12px;
    color: #595959;
    margin-bottom: 50px;
   }

   .sucesso{
    margin-bottom: 40%;

   }

   .mensagem{
     margin-top: 40px;
   }

   .name{
    color: #1B1B1B;
    margin-top: 40px;
    font-size: 22px;
    font-weight: 400;
   
   }

   .endereco{
    color: #5E5E5E;
    font-size: 20px;
    margin-top: 40px;
    
   }

`

