import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="topo" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span>Medicina · Gestão em Saúde Pública · Educação médica</span>
          </div>
          <h1 className={styles.title}>
            Assistência, gestão e
            <br />
            <span className={styles.titleEm}>educação</span> em saúde.
          </h1>
          <p className={styles.lead}>
            Médico pela Universidade de Vassouras e gestor em Saúde Pública. Atua na interface
            entre assistência médica, gestão estratégica e educação em saúde, com experiência em
            coordenação institucional, formulação de diretrizes educacionais e organização de
            eventos científicos de abrangência nacional.
          </p>
          <div className={styles.actions}>
            <a href="#contato" className={styles.primary}>
              Agendar avaliação
            </a>
            <a href="#trajetoria" className={styles.secondary}>
              Ver trajetória
            </a>
          </div>
          <div className={styles.stats}>
            <div>
              <div className={styles.statValue}>2026</div>
              <div className={styles.statLabel}>Diretor Médico · ABMAR</div>
            </div>
            <div>
              <div className={styles.statValue}>24h</div>
              <div className={styles.statLabel}>Semanais em urgência</div>
            </div>
            <div>
              <div className={styles.statValue}>05</div>
              <div className={styles.statLabel}>Formações concluídas</div>
            </div>
          </div>
        </div>

        <div className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/wa1.jpeg"
              alt="Dr. Renzo Curty"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className={styles.portraitScrim} />
          </div>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Atuação assistencial</div>
            <div className={styles.cardText}>
              Urgência e emergência: avaliação, estratificação de risco, diagnóstico e manejo de
              pacientes em diferentes níveis de complexidade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
