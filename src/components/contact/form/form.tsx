import React from "react";
import * as S from "./styles";
import {BsWhatsapp} from "react-icons/bs";
import MapLink from "./mapLink/mapLink";

const Form = () => {
  return (
    <S.Form>
      <div>

        <S.Title>
          
          <h1>Fale conosco</h1>
          <label className="line"></label>
        </S.Title>

        <S.Data>
          <label>
            
          <input 
          type="text"
           placeholder="Nome" 
           required />
          </label>

          <label>
            <input
             type="email" 
             placeholder="Email" 
             required />
          </label>

          <label>
            <input 
            type="tel" 
            placeholder="Telefone" 
            required />
          </label>

          <label>
            <textarea
              rows={8}
              cols={70}
              id="myTextarea"
              placeholder="Mensagem"
            ></textarea>
          </label>
        </S.Data>

        <S.FirstButton>
          <label>
            <button type="submit">Enviar</button>
          </label>
        </S.FirstButton>
        
        <S.GooglePrivacy>
          <label>
            <a href="https://policies.google.com/privacy" className="privacidade">
              Este site é protegido por reCAPTCHA. A Política de Privacidade e os
              Termos de Serviço do Google são aplicáveis.
            </a>
          </label>
        </S.GooglePrivacy>

        <S.Text>
          <label>
          <h4 className="sucesso">O seu sucesso é a nossa recompensa!!!</h4>
          </label>
        </S.Text>

        <S.SecondButton>
          <label>
            <button type="submit" className="mensagem">
              <BsWhatsapp/>
              <p>Enviar mensagem</p>
              </button>
          </label>
        </S.SecondButton>

        <S.Name>
          <label>
            <h4 className="name">Lucas Technology Services</h4>
          </label>
        </S.Name>

        <S.Address>
          <label>
            <p className="endereco">Av Vicente de Carvalho, </p>
          </label>
        </S.Address>

        <S.Email>
          <label>
            <a href="mailto:commercial2018@lucastechnologyservice.com">E-mail: commercial2018@lucastecnologyservice.com </a>
          </label>

          <label>
            <a href="+552130425441">Tel: +55 21 3042-5441</a>
          </label>
        </S.Email>

        <S.Map>        
          <MapLink></MapLink>
        </S.Map>
        
      </div>
      

      
    </S.Form>
  );
};

export default Form;
