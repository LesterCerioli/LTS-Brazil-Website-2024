import React from "react";
import * as S from "./styles";

const Form = () => {
  return (
    <S.Form>
      <div>
        <S.Title>
          <h1>Fale conosco</h1>
        </S.Title>

        <label className="line"></label>

        <span>Entre em contato</span>

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
            rows={5}
            cols={50}
            id="myTextarea"
            placeholder="Mensagem"
          ></textarea>
        </label>

        <label>
          <button type="submit">Enviar</button>
        </label>

        <label>
          <h6>
            Este site é protegido por reCAPTCHA. A Política de Privacidade e os
            Termos de Serviço do Google são aplicáveis.
          </h6>
        </label>

        <span>O seu sucesso é a nossa recompensa!!!</span>

        <label>
          <button type="submit">Enviar</button>
        </label>
      </div>
    </S.Form>
  );
};

export default Form;
