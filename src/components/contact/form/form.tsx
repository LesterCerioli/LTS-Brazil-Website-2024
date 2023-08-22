import React from "react";
import * as S from "./styles";
import {BsWhatsapp} from "react-icons/bs";
import MapLink from "./mapLink/mapLink";



// apagar até aqui


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schemaForma = z.object({
  dataClient: z.object({
    name: z.string().min(6, 'Por favor, informe seu nome completo'),
    email: z.string().min(6, 'Por favor, informe seu e-mail'),
    tel: z.string().min(9, 'Por favor, informe seu telefone')
  })

});





const Form = () => {

  const { handleSubmit,
     register,
      formState: { errors }
    } = useForm({
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(schemaForma)
    });  



   const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>

        <S.Title>
          <h1>Fale conosco</h1>
          <label className="line"></label>
        </S.Title>

        <S.Data>                  
          <input
          {...register('Nome')} 
          type="text"
           placeholder="Nome" 
            
           />
                  
            <input
            {...register('Email')}
             type="email" 
             placeholder="Email" 
              
             />
         
            <input 
            {...register('Telefone')}
            type="tel" 
            placeholder="Telefone" 
            />
          
            <textarea
              rows={8}
              cols={70}
              id="myTextarea"
              placeholder="Mensagem"
            ></textarea>
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
          
          <h4 className="sucesso">O seu sucesso é a nossa recompensa!!!</h4>
        
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
            <p className="endereco">Av Vicente de Carvalho, 1086 </p>
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
        
      </form>
      

      
    </S.Container>
  );
};

export default Form;
