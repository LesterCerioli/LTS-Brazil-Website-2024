

"use client";

import React, { useEffect, useState } from "react";

import * as S from "./styles";

import { BsWhatsapp } from "react-icons/bs";

import MapLink from "./mapLink/mapLink";

import { MdEmail } from "react-icons/md";

import { BsTelephoneFill } from "react-icons/bs";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

 

const schemaForm = z.object({

  dataClient: z.object({

    name: z.string().min(10, "Informe seu nome completo"),

    email: z.string().min(6, "Informe seu e-mail"),

    tel: z.string().max(12).regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/, {

      message: "Informe um telefone válido",

    }),

  }),

});

 

type FormProps = z.infer<typeof schemaForm>;

 

const phoneNumber = "+552130425441";

 

const Form = () => {

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormProps | null>(null);

  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

 

  useEffect(() => {

    const storedData = localStorage.getItem("formData");

    if (storedData) {

      setFormData(JSON.parse(storedData));

    }

  }, []);

 

  const handleFormSubmit = async (data: FormProps) => {

    setIsSending(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

 

    localStorage.setItem("formData", JSON.stringify(data));

    setIsSending(false);

    setFormData(data);

    setIsThankYouVisible(true);

  };

 

  const handleFormClear = () => {

    localStorage.removeItem("formData");

    setFormData(null);

  };

 

  const {

    handleSubmit,

    register,

    reset, 

    formState: { errors },

  } = useForm<FormProps>({

    criteriaMode: "all",

    mode: "all",

    resolver: zodResolver(schemaForm),

    defaultValues: {

      dataClient: {

        name: "",

        email: "",

        tel: "",

      },

    },

  });

  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);

  const handlePhonePopup = () => {
    setIsPhonePopupOpen(!isPhonePopupOpen);
  };


  const handleWhatsAppClick = () => {
    const phoneNumber = "+555521964108815";
    const message = "Olá, um instante, por favor";
    const whatsappLink = `https://wa.me/555521964108815?text=${encodeURIComponent(
      "Seja bem-vindo"
    )}`;
    window.open(whatsappLink);
  };

 

  return (

    <S.Container>

      <form onSubmit={handleSubmit((data) => {

        handleFormSubmit(data);

        reset(); 

      })}>

<S.Title>
          <h1>Fale conosco</h1>
          <label className="line"></label>
        </S.Title>

        <S.Data>
          <input
            {...register("dataClient.name")}
            type="text"
            placeholder="Nome"
          />
          {errors.dataClient?.name?.message && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient?.name?.message}
            </p>
          )}

          <input
            {...register("dataClient.email")}
            type="email"
            placeholder="Email"
          />
          {errors.dataClient?.email?.message && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient?.email?.message}
            </p>
          )}

          <input
            {...register("dataClient.tel")}
            type="tel"
            placeholder="Telefone"
          />
          {errors.dataClient?.tel?.message && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient?.tel?.message}
            </p>
          )}

          <textarea
            rows={8}
            cols={70}
            id="myTextarea"
            placeholder="Mensagem"
          ></textarea>
        </S.Data>

        <S.FirstButton>
          <label>
            <button type="submit" className={isSending ? "sending" : ""}
            disabled={isSending}>{isSending ? "Enviando..." : "Enviar"}</button>
          </label>

        </S.FirstButton>

        
        <S.GooglePrivacy>
          <label>
            <a
              href="https://policies.google.com/privacy"
              className="privacidade"
            >
              Este site é protegido por reCAPTCHA. A Política de Privacidade e
              os Termos de Serviço do Google são aplicáveis.
            </a>
          </label>
        </S.GooglePrivacy>

        <S.Text>
          <h4 className="sucesso">O seu sucesso é a nossa recompensa!!!</h4>
        </S.Text>

        <S.SecondButton>
          <label>
            <button
              type="submit"
              className="mensagem"
              onClick={handleWhatsAppClick}
            >
              <BsWhatsapp />
              <p>Enviar mensagem</p>
            </button>
          </label>
        </S.SecondButton>

        <S.Name>
          <label>
            <h4 className="name">Lucas Technologia Services</h4>
          </label>
        </S.Name>

        <S.Address>
          <label>
            <p className="endereco">Av Vicente de Carvalho, 1086 </p>
          </label>
        </S.Address>

        <S.Email>
          <label>
            <a href="mailto:commercial2018@lucastechnologyservice.com">
              <MdEmail style={{ fontSize: "22px", marginRight: "5px" }} />
              commercial2018@lucastecnologyservice.com
            </a>
          </label>

          <label>
            <a href={`tel:${phoneNumber}`} onClick={handlePhonePopup}>
              <BsTelephoneFill
                style={{ fontSize: "22px", marginRight: "5px" }}
              />
              +55 21 3042-5441
            </a>
          </label>
        </S.Email>

       
        
        <S.Map>
          <MapLink></MapLink>
        </S.Map>

      </form>

        {isThankYouVisible && (

          <S.Text>

            <h4 className="sucesso">Obrigado pelo seu contato!</h4>

          </S.Text>

        )}

      

    </S.Container>

)  ;

};


export default Form;