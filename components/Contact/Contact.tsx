"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CalendarBlank, ClipboardText, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { motivos, whatsappNumero } from "@/lib/data";
import styles from "./Contact.module.css";

const initialForm = { nome: "", email: "", telefone: "", mensagem: "" };

type FormState = typeof initialForm;

export default function Contact() {
  const [motivo, setMotivo] = useState(motivos[0]);
  const [form, setForm] = useState<FormState>(initialForm);
  const [enviado, setEnviado] = useState(false);

  function handleChange(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const linhas = [
      "Olá, Dr. Renzo Curty! Vim pelo site e gostaria de enviar uma solicitação.",
      "",
      `*Nome:* ${form.nome.trim()}`,
      form.email.trim() ? `*E-mail:* ${form.email.trim()}` : null,
      form.telefone.trim() ? `*Telefone:* ${form.telefone.trim()}` : null,
      `*Motivo:* ${motivo}`,
      form.mensagem.trim() ? `\n*Mensagem:*\n${form.mensagem.trim()}` : null,
    ].filter((l) => l !== null);

    const url = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>Contato</div>
            <h2 className={styles.title}>Agende uma avaliação clínica</h2>
          </div>
          <p className={styles.lead}>
            Atendimento ambulatorial em clínica geral, consultoria em gestão de saúde e convites
            para atividades científicas e formativas.
          </p>
        </div>

        <div className={styles.clinicCard}>
          <div className={styles.clinicHead}>
            <div className={styles.clinicTitle}>Ambulatório de Clínica Geral</div>
            <span className={styles.openBadge}>Agenda aberta</span>
          </div>
          <div className={styles.clinicGrid}>
            <div className={styles.clinicCell}>
              <div className={styles.cellLabel}>
                <CalendarBlank size={13} />
                Dias de atendimento
              </div>
              <div className={styles.cellValue}>Quintas e sextas-feiras</div>
            </div>
            <div className={styles.clinicCell}>
              <div className={styles.cellLabel}>
                <ClipboardText size={13} />
                Modalidades
              </div>
              <div className={styles.cellValue}>Convênios e particular</div>
            </div>
            <div className={styles.clinicCell}>
              <div className={styles.cellLabel}>
                <MapPin size={13} />
                Local
              </div>
              <div className={styles.cellValue}>Hospital Flávio Leal</div>
              <div className={styles.cellSub}>Piraí · RJ</div>
            </div>
            <div className={styles.clinicCell}>
              <div className={styles.cellLabel}>
                <Phone size={13} />
                Agendamentos
              </div>
              <div className={styles.cellValue}>(24) 3511-5600</div>
              <div className={styles.cellSub}>Ramal 2 · Recepção do ambulatório</div>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.formIntro}>
              <div className={styles.formIntroBlock}>
                <div className={styles.formIntroTitle}>Envie uma solicitação</div>
                <p className={styles.formIntroText}>
                  Retorno em até dois dias úteis.{" "}
                  <span className={styles.emergencyNote}>
                    Este formulário não substitui atendimento de urgência: em emergências, procure
                    o serviço de saúde mais próximo ou ligue 192.
                  </span>
                </p>
              </div>

              <div className={styles.submitRow}>
                {enviado && (
                  <span className={styles.confirmation}>
                    Abrimos o WhatsApp com sua mensagem. Toque em enviar para concluir.
                  </span>
                )}
                <button type="submit" className={styles.submitBtn}>
                  <WhatsappLogo size={18} weight="bold" />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </div>

            <div className={styles.fields}>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="nome">Nome completo</label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Como devemos chamá-lo"
                    className={styles.input}
                    value={form.nome}
                    onChange={handleChange("nome")}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="nome@email.com"
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className={styles.input}
                    value={form.telefone}
                    onChange={handleChange("telefone")}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fs-label-xs)",
                    letterSpacing: "1.6px",
                    textTransform: "uppercase",
                    color: "var(--text-on-dark-faint)",
                    marginBottom: 11,
                  }}
                >
                  Motivo do contato
                </label>
                <div className={styles.chips}>
                  {motivos.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMotivo(m)}
                      className={`${styles.chip} ${motivo === m ? styles.chipSelected : ""}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={3}
                  placeholder="Descreva brevemente sua necessidade"
                  className={styles.textarea}
                  value={form.mensagem}
                  onChange={handleChange("mensagem")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
