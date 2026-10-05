import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.numeral} aria-hidden="true">
        404
      </div>

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Erro 404 · Página não encontrada</span>
        </div>

        <h1 className={styles.title}>
          Este endereço
          <br />
          <span className={styles.titleEm}>não existe</span> por aqui.
        </h1>

        <p className={styles.lead}>
          O link pode estar incorreto ou a página pode ter mudado de lugar. Use os caminhos abaixo
          para continuar a navegação.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            <ArrowLeft size={16} weight="bold" />
            Voltar para a Home
          </Link>
          <Link href="/sobre" className={styles.secondary}>
            Conhecer a trajetória
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <nav className={styles.shortcuts} aria-label="Atalhos">
          <Link href="/sobre#atuacao">Atuação</Link>
          <Link href="/sobre#producao">Produção</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
      </div>
    </section>
  );
}
