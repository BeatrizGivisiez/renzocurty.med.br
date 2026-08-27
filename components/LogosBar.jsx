import styles from "./LogosBar.module.css";

const instituicoes = [
  "ABMAR",
  "Universidade de Vassouras",
  "Hospital Municipal Luiz Gonzaga",
  "DENEM",
  "NEABI",
];

export default function LogosBar() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <span className={styles.label}>Vínculos e instituições</span>
        <div className={styles.logos}>
          {instituicoes.map((nome) => (
            <span key={nome}>{nome}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
