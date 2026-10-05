import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.brand}>
          <Image
            src="/images/logo-renzo-curty.png"
            alt="Dr. Renzo Curty"
            width={32}
            height={27}
            className={styles.monogram}
          />
          <span className={styles.copy}>© 2026 Dr. Renzo Curty · Todos os direitos reservados</span>
        </div>
        <div className={styles.crm}>Médico · CRM/RJ 52.140936-9</div>
      </div>
    </footer>
  );
}
