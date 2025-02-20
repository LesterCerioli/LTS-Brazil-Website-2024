"use client";

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "react-modal";
import { GoIssueClosed } from "react-icons/go";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const schemaForm = z.object({
  dataClient: z.object({
    name: z.string().min(10, "Informe seu nome completo"),
    email: z.string().min(6, "Informe seu e-mail"),
    tel: z.string().max(12).regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/, {
      message: "Informe um telefone válido",
    }),
    linkedin: z.string().url("Informe uma URL válida do LinkedIn"),
    resume: z
      .custom<FileList>((files) => files.length > 0, "Selecione um arquivo PDF")
      .refine((files) => files.item(0)?.type === "application/pdf", {
        message: "O arquivo deve estar no formato PDF",
      }),
  }),
});

type FormProps = z.infer<typeof schemaForm>;

export default function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);

  const NEXT_PUBLIC_API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://lts-brazil-website-2024.vercel.app";
  const NEXT_PUBLIC_API_CONTACTS =
    process.env.NEXT_PUBLIC_API_CONTACTS || "/api/contacts";

  const abrirModal = () => {
    setModalIsOpen(true);
  };

  const fecharModal = () => {
    setModalIsOpen(false);
    reset();
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
        linkedin: "",
        
      },
    },
  });

  const handleFormSubmit = async (data: FormProps) => {
    setIsSending(true);

    try {
      const formData = new FormData();
      formData.append("name", data.dataClient.name);
      formData.append("email", data.dataClient.email);
      formData.append("phone", data.dataClient.tel);
      formData.append("linkedin", data.dataClient.linkedin);
      

      if (data.dataClient.resume.length > 0) {
        formData.append("resume", data.dataClient.resume[0]);
      }

      const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}${NEXT_PUBLIC_API_CONTACTS}`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        abrirModal();
        setFormMessage("Seu currículo foi enviado com sucesso!");
        reset();
      } else {
        setFormMessage(result.error || "Erro ao enviar currículo.");
      }
    } catch (error) {
      console.error("Erro ao enviar currículo:", error);
      setFormMessage("Erro ao conectar-se ao servidor.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Title>
          <h1>Cadastre o seu currículo</h1>
          <label className="line"></label>
        </S.Title>

        <S.Data>
          <input {...register("dataClient.name")} type="text" placeholder="Nome" required />
          {errors.dataClient?.name && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.name.message}</p>
          )}

          <input {...register("dataClient.email")} type="email" placeholder="Email" required />
          {errors.dataClient?.email && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.email.message}</p>
          )}

          <input {...register("dataClient.tel")} type="tel" placeholder="Telefone" required />
          {errors.dataClient?.tel && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.tel.message}</p>
          )}

          <input {...register("dataClient.linkedin")} type="url" placeholder="LinkedIn (Ex: https://www.linkedin.com/in/seu-perfil)" required />
          {errors.dataClient?.linkedin && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.linkedin.message}</p>
          )}

                    
          <S.FileUpload>
            <input
              type="file"
              accept=".pdf"
              {...register("dataClient.resume")}
            />
            {errors.dataClient?.resume && (
              <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.resume.message}</p>
            )}
          </S.FileUpload>
        </S.Data>

        <S.FirstButton>
          <label>
            <button type="submit" className={isSending ? "sending" : ""} disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </label>
        </S.FirstButton>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            textAlign: "center",
            backgroundColor: "#E8F0FE",
            border: "none",
          },
        }}
        contentLabel="Currículo Enviada"
        ariaHideApp={false}
      >
        <p>{formMessage}</p>
        <S.Button onClick={fecharModal}>
          <GoIssueClosed />
        </S.Button>
      </Modal>
    </S.Container>
  );
}
