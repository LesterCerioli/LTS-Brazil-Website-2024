import React from "react";
import * as S from "./styles";
import {BsWhatsapp} from "react-icons/bs";

const Form = () => {
  return (
    <S.Form>
      <div>

        <label>
          <h1 className="convite">Fale conosco</h1>
        </label>

        <label className="line"></label>
       
        <label>
          <input type="text" placeholder="Nome" required />
        </label>

        <label>
          <input type="email" placeholder="Email" required />
        </label>

        <label>
          <input type="tel" placeholder="Telefone" required />
        </label>

        <label>
          <textarea
            rows={8}
            cols={70}
            id="myTextarea"
            placeholder="Mensagem"
          ></textarea>
        </label>

        <label>
          <button type="submit">Enviar</button>
        </label>

        <label>
          <p className="privacidade">
            Este site é protegido por reCAPTCHA. A Política de Privacidade e os
            Termos de Serviço do Google são aplicáveis.
          </p>
        </label>

        <label>
        <span className="sucesso">O seu sucesso é a nossa recompensa!!!</span>
        </label>
        
        <label>
          <button type="submit" className="mensagem"><BsWhatsapp/>Enviar mensagem</button>
        </label>

        <label>
          <h4 className="name">Lucas Technology Services</h4>
        </label>

        <label>
          <p className="endereco">Av Vicente de Carvalho, </p>
        </label>

        <label>
          <a href="mailto:commercial2018@lucastechnologyservice.com">E-mail: commercial2018@lucastecnologyservice.com </a>
        </label>

        <label>
          <a href="+552130425441">Tel: +55 21 3042-5441</a>
        </label>
      </div>
    </S.Form>
  );
};

export default Form;
