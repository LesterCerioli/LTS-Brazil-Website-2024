"use client";

import React, { useState } from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "react-modal";
import { GoIssueClosed } from "react-icons/go";

const schemaForm = z.object({
  name: z.string().min(10, "Informe seu nome completo"),
  email: z.string().min(6, "Informe seu e-mail").email("Email inválido"),
  telephone: z
    .string()
    .max(12)
    .regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/, {
      message: "Informe um telefone válido",
    }),
  message: z.string().min(1, "Informe sua mensagem"),
});

type FormProps = z.infer<typeof schemaForm>;

export default function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data: FormProps) => {
    setIsSending(true);
    try {
      const response = await fetch('http://localhost:3033/submit', {
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
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    } finally {
      setIsSending(false);
      reset();
    }
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
            {...register("name")}
            type="text"
            placeholder="Nome"
            required
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.name.message}
            </p>
          )}
          
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            required
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.email.message}
            </p>
          )}

          <input
            {...register("telephone")}
            type="tel"
            placeholder="Telefone"
            required
          />
          {errors.telephone && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.telephone.message}
            </p>
          )}

          <textarea
            {...register("message")}
            rows={8}
            cols={70}
            placeholder="Mensagem"
            required
          ></textarea>
          {errors.message && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.message.message}
            </p>
          )}
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