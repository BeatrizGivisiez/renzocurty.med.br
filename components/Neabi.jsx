import Image from "next/image";
import NumberedList from "./NumberedList";
import styles from "./Neabi.module.css";

const frentes = [
  "Atividades formativas e grupos de estudo",
  "Seminários e ações culturais",
  "Intervenções comunitárias",
  "Fortalecimento das políticas de ações afirmativas",
];

export default function Neabi() {
  return (
    <section id="campo" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>05 · NEABI</div>
            <h2 className={styles.title}>Núcleo de Estudos Afro-Brasileiros e Indígenas</h2>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>Projeto de extensão · 2024 · 2026</span>
            <span className={styles.status}>Situação: concluído</span>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.photo}>
            <Image
              src="/images/grupo5.jpeg"
              alt="Atividade do NEABI junto a comunidade indígena"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className={styles.photoScrimStrong} />
            <div className={styles.photoCaption}>
              <span className={styles.photoLabel}>Intervenção comunitária · NEABI</span>
              <div className={styles.photoTitle}>
                Valorização das culturas afro-brasileiras e indígenas
              </div>
              <p className={styles.photoLead}>
                Projeto de extensão universitária voltado à promoção da equidade racial e ao
                enfrentamento do racismo estrutural no ambiente acadêmico e na sociedade,
                articulando produção de conhecimento crítico com práticas educativas
                antirracistas.
              </p>
              <div className={styles.photoFooter}>
                Integrantes: Renzo Curty · Marcia Sena B. M. Ribeiro (responsável)
              </div>
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.legalCard}>
              <div className={styles.legalHeading}>Base legal da atuação</div>
              <div className={styles.legalList}>
                <div className={styles.legalItem}>
                  <div className={styles.legalTitle}>Lei nº 10.639/2003</div>
                  <div className={styles.legalDesc}>
                    Obrigatoriedade do ensino de história e cultura afro-brasileira.
                  </div>
                </div>
                <div className={styles.legalItem}>
                  <div className={styles.legalTitle}>Lei nº 11.645/2008</div>
                  <div className={styles.legalDesc}>
                    Inclusão da história e cultura dos povos indígenas no currículo escolar.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.frentesCard}>
              <div className={styles.frentesHeading}>Frentes de atuação</div>
              <div style={{ marginTop: 18 }}>
                <NumberedList
                  items={frentes}
                  bordered={false}
                  indexColor="var(--accent-label)"
                  indexSize="11px"
                  textColor="rgba(25,28,19,.8)"
                  textSize="15px"
                />
              </div>
              <p className={styles.frentesFoot}>
                Fundamentado na indissociabilidade entre ensino, pesquisa e extensão, com foco na
                formação de profissionais comprometidos com a justiça social, os direitos humanos
                e a diversidade étnico-racial.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.smallPhoto} style={{ height: 260 }}>
            <Image src="/images/grupo1.jpeg" alt="Atividade científica ABMAR" fill sizes="50vw" />
            <div className={styles.smallPhotoScrim} />
            <div className={styles.smallCaption}>
              <span className={styles.smallLabel}>ABMAR</span>
              <div className={styles.smallTitle}>Organização de eventos científicos</div>
            </div>
          </div>
          <div className={styles.smallPhoto} style={{ height: 260 }}>
            <Image
              src="/images/grupo4.jpeg"
              alt="Atividade de extensão"
              fill
              sizes="50vw"
              style={{ objectPosition: "50% 42%" }}
            />
            <div className={styles.smallPhotoScrim} />
            <div className={styles.smallCaption}>
              <span className={styles.smallLabel}>Extensão universitária</span>
              <div className={styles.smallTitle}>Projeto Ipiranga Ampliado · Vassouras e região</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
