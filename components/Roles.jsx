import { cargos } from "@/lib/data";
import styles from "./Roles.module.css";

export default function Roles() {
  return (
    <section id="atuacao" className={styles.section}>
      <div className={styles.eyebrow}>03 · Atuação profissional</div>
      <h2 className={styles.title}>Vínculos, cargos e responsabilidades</h2>

      <div className={styles.grid}>
        {cargos.map((c, i) => {
          const ativo = c.status === "Ativo";
          const spanAll = cargos.length % 2 === 1 && i === cargos.length - 1;
          return (
            <div
              key={c.cargo + c.org}
              className={`${styles.card} ${ativo ? styles.cardActive : styles.cardDone} ${
                spanAll ? styles.cardSpanAll : ""
              }`}
            >
              <div className={styles.cardTop}>
                <span
                  className={styles.periodo}
                  style={{ color: ativo ? "#DCE3CC" : "var(--accent-label)" }}
                >
                  {c.periodo}
                </span>
                <span
                  className={styles.badge}
                  style={{
                    borderColor: ativo ? "rgba(245,241,232,.45)" : "rgba(25,28,19,.2)",
                    background: ativo ? "rgba(245,241,232,.12)" : "transparent",
                    color: ativo ? "#F5F1E8" : "rgba(25,28,19,.55)",
                  }}
                >
                  <span
                    className={styles.badgeDot}
                    style={{ background: ativo ? "#BFD4A2" : "rgba(25,28,19,.3)" }}
                  />
                  {c.status}
                </span>
              </div>
              <div>
                <div className={styles.cargo}>{c.cargo}</div>
                <div
                  className={styles.org}
                  style={{ color: ativo ? "#E4E9D6" : "var(--rc-verde-500)" }}
                >
                  {c.org}
                </div>
              </div>
              <p
                className={styles.desc}
                style={{ color: ativo ? "rgba(245,241,232,.78)" : "rgba(25,28,19,.68)" }}
              >
                {c.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
