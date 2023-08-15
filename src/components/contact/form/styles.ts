import styled from 'styled-components'

export const Form = styled.label`
    
    p{
        font-size: 28px;
        color: #021F3E;
        font-family: 'Archivo Black', Arial, sans-serif;
    }

    div{
        box-sizing: border-box;
        display: flex;
        width: 960px;
        height: 100vh;
        flex-direction: column;
        margin: auto;
        align-items: center;
        gap:10px; 
        background-color: blue;
        
    }

    input, textarea {
        outline: none;
        padding: 20px;
        width: 750px;
        border: 1px solid;
        border-radius: 10px;
            
    }

    input:hover{
        transition: 0.3s;
        transform: scale(1.05);
    }

    textarea:hover{
        transition: 0.3s;
        transform: scale(1.05);
    }


   .contato{
        font-family: Montserrat, Arial, sans-serif;
        color: #1B1B1B;       
        font-weight: 1px;
        font-size: 22px;
        margin: 40px;


   }

   .line{
    border-bottom: 2px solid #021F3E;
    width: 200px;
    margin: auto;
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
    
   }

   button:hover{
    transition: 0.3s;
    transform: scale(1.1);
   }

   
`

export const Title = styled.label`
 
   
    color: #021F3E;
    
`