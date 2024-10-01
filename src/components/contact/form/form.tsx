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
import Modal from "react-modal";
import { GoIssueClosed } from "react-icons/go";

const schemaForm = z.object({
  dataClient: z.object({
    name: z.string().min(10, "Informe seu nome completo"),
    email: z.string().min(6, "Informe seu e-mail").email("Email inválido"),
    tel: z
      .string()
      .max(12)
      .regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/, {
        message: "Informe um telefone válido",
      }),
  }),
});

type FormProps = z.infer<typeof schemaForm>;

export default function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showRequiredErrors, setShowRequiredErrors] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      dataClient: {
        name: "",
        email: "",
        tel: "",
      },
    },
  });

  const handleFormSubmit = async (data: FormProps) => {
    setIsSending(true);
    const response = await fetch('/api/saveFormData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setModalIsOpen(true);
    } else {
      console.error('Erro ao enviar dados');
    }

    setIsSending(false);
    reset();
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
            {...register("dataClient.name")}
            type="text"
            placeholder="Nome"
            required
          />
          {errors.dataClient?.name && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient.name.message}
            </p>
          )}
          
          <input
            {...register("dataClient.email")}
            type="email"
            placeholder="Email"
            required
          />
          {errors.dataClient?.email && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient.email.message}
            </p>
          )}

          <input
            {...register("dataClient.tel")}
            type="tel"
            placeholder="Telefone"
            required
          />
          {errors.dataClient?.tel && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient.tel.message}
            </p>
          )}

          <textarea rows={8} cols={70} id="myTextarea" placeholder="Mensagem"></textarea>
        </S.Data>

        <S.FirstButton>
          <label>
            <button
              type="submit"
              className={isSending ? "sending" : ""}
              disabled={isSending}
            >
              {isSending ? "Enviando" : "Enviar"}
            </button>
          </label>
        </S.FirstButton>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            fontSize: "30px",
            fontWeight: "500",
            color: "green",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#E8F0FE",
          },
        }}
        contentLabel="Modal de Confirmação"
        ariaHideApp={false}
      >
        <p>Obrigado pelo seu contato!</p>
        <button onClick={() => setModalIsOpen(false)}>
          <GoIssueClosed />
        </button>
      </Modal>
    </S.Container>
  );
}
