import React from 'react'
import * as S from './styles'

const Form = () => {
  return (
    <S.Form>
    <S.Title>
        <h1>Fale conosco</h1>
    </S.Title>  

      <div className = "line"></div>

      <div>
      <input type="text" 
            placeholder="Nome" 
            required />
      </div>

      <div>
      <input type="email" 
            placeholder="Email" 
            required />

      </div>

      <div>
      <textarea id="myTextarea" placeholder='Mensagem'></textarea>
      </div>

      <div>
      <button>Enviar</button>
      </div>
      
    </S.Form>
  )
}

export default Form;
