import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.brand}>
          <div className={styles.monogram}>RC</div>
          <span className={styles.copy}>© 2026 Dr. Renzo Curty · Todos os direitos reservados</span>
        </div>
        <div className={styles.crm}>Registro profissional CRM-RJ · a informar</div>
      </div>
    </footer>
  );
}
