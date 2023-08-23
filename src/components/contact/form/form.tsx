import React from "react";
import * as S from "./styles";
import {BsWhatsapp} from "react-icons/bs";
import MapLink from "./mapLink/map";
import {MdEmail} from "react-icons/md"
import {BsTelephoneFill} from "react-icons/bs"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";




const schemaForm = z.object({
  dataClient: z.object({
    name: z.string().min(10, 'Informe seu nome completo'),
    email: z.string().min(6, 'Informe seu e-mail'),
    tel: z.string().max(12).regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/, {

    message: "Informe um telefone válido",

    }),
  })

});

type FormProps = z.infer<typeof schemaForm>

const Form = () => {

const { handleSubmit,
     register,
      formState: { errors }
    } = useForm<FormProps>({
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(schemaForm),
      defaultValues: {
        dataClient: {
          name: '',
          email: '',
          tel: '',
        }
      }
    });  

   const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>

        <S.Title>
          <h1>Fale conosco</h1>
          <label className="line"></label>
        </S.Title>

        <S.Data>                  
          <input
          {...register('dataClient.name')} 
          type="text"
           placeholder="Nome" 
          
            
           />
           {errors.dataClient?.name?.message && (
              <p style={{ color: 'red', fontSize: '10px', textAlign: 'left' }}>{errors.dataClient?.name?.message}</p>
           )}
                  
            <input
            {...register('dataClient.email')}
             type="email" 
             placeholder="Email"
             />
             {errors.dataClient?.email?.message && (
              <p style={{ color: 'red', fontSize: '10px', textAlign: 'left' }}>{errors.dataClient?.email?.message}</p>
           )}
         
            <input 
            {...register('dataClient.tel')}
            type="tel" 
            placeholder="Telefone"
            
            />
            {errors.dataClient?.tel?.message && (
              <p style={{ color: 'red', fontSize: '10px', textAlign: 'left' }}>{errors.dataClient?.tel?.message}</p>
           )}
          
            <textarea
              rows={10}
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
            <a href="mailto:commercial2018@lucastechnologyservice.com"><MdEmail style={{ fontSize: '22px', marginRight: '5px' }} />  commercial2018@lucastecnologyservice.com </a>
          </label>

          <label>
            <a href="+552130425441"><BsTelephoneFill style={{ fontSize: '22px', marginRight: '5px' }}/> +55 21 3042-5441</a>
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
