"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { formacao, premios, certificacoes } from "@/lib/data";
import styles from "./Trajectory.module.css";

export default function Trajectory() {
  return (
    <section id="trajetoria" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>02 · Trajetória</div>
            <h2 className={styles.title}>Formação e titulação</h2>
          </div>
          <a href="/curriculo.pdf" target="_blank" className={styles.lattesLink}>
            Currículo Lattes completo
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </div>

        <div className={styles.grid}>
          <div>
            {formacao.map((f) => (
              <div key={f.titulo} className={styles.formacaoItem}>
                <div className={styles.formacaoAno}>{f.ano}</div>
                <div>
                  <div className={styles.formacaoTitulo}>{f.titulo}</div>
                  <div className={styles.formacaoInst}>{f.inst}</div>
                  {f.nota && <div className={styles.formacaoNota}>{f.nota}</div>}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className={styles.premiosCard}>
              <div className={styles.premiosHeading}>Prêmios e títulos</div>
              {premios.map((p) => (
                <div key={p.txt} className={styles.premioRow}>
                  <div className={styles.premioAno}>{p.ano}</div>
                  <div className={styles.premioTxt}>{p.txt}</div>
                </div>
              ))}
            </div>

            <div className={styles.certCard}>
              <div className={styles.certHeading}>Certificações recentes</div>
              <div className={styles.certList}>
                {certificacoes.map((c) => (
                  <div key={c.txt} className={styles.certRow}>
                    <span className={styles.certTxt}>{c.txt}</span>
                    <span className={styles.certMeta}>{c.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
