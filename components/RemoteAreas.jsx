import Image from "next/image";
import { congressosAbmar } from "@/lib/data";
import styles from "./RemoteAreas.module.css";

export default function RemoteAreas() {
  return (
    <section id="abmar" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>04 · Áreas remotas</div>
            <h2 className={styles.title}>Medicina onde a retaguarda não existe</h2>
          </div>
          <p className={styles.lead}>
            Como Diretor Médico da ABMAR, responde pela qualidade técnica e científica de uma
            entidade dedicada à prática médica em ambientes de difícil acesso e esportes de
            aventura.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.photo}>
            <Image
              src="/images/grupo1.jpeg"
              alt="Atividade científica da ABMAR"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className={styles.photoScrim} />
            <div className={styles.photoCaption}>
              <span className={styles.photoLabel}>Atividade científica · ABMAR</span>
              <div className={styles.photoTitle}>
                Formação de profissionais para o ambiente adverso
              </div>
            </div>
          </div>

          <div>
            <div className={styles.subHeading}>Responsabilidades na entidade</div>

            <div className={styles.roleRow}>
              <div className={styles.roleTop}>
                <span className={styles.roleName}>Diretor Médico</span>
                <span className={styles.rolePeriod}>2026 · Atual</span>
              </div>
              <p className={styles.roleDesc}>
                Supervisão técnica e científica das atividades médicas: qualidade e segurança dos
                protocolos assistenciais, elaboração de diretrizes clínicas e representação
                institucional em pautas técnicas.
              </p>
            </div>

            <div className={`${styles.roleRow} ${styles.roleRowLast}`}>
              <div className={styles.roleTop}>
                <span className={styles.roleName}>Diretor Acadêmico</span>
                <span className={styles.rolePeriod}>2024 · 2026</span>
              </div>
              <p className={styles.roleDesc}>
                Coordenação das atividades científicas e formativas, incluindo cursos, congressos
                e jornadas, além da articulação com ligas acadêmicas, universidades e profissionais
                da área.
              </p>
            </div>

            <div className={styles.congressWrap}>
              <div className={styles.subHeading}>Temas apresentados em congresso</div>
              {congressosAbmar.map((c) => (
                <div key={c.txt} className={styles.congressRow}>
                  <span className={styles.congressAno}>{c.ano}</span>
                  <span className={styles.congressTxt}>{c.txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
