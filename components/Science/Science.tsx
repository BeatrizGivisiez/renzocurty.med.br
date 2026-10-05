import { artigos, palestras, midia } from "@/lib/data";
import styles from "./Science.module.css";

export default function Science() {
  return (
    <section id="producao" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>06 · Produção</div>
            <h2 className={styles.title}>Produção bibliográfica e técnica</h2>
          </div>
          <div className={styles.metrics}>
            <div>
              <div className={styles.metricValue}>02</div>
              <div className={styles.metricLabel}>Artigos</div>
            </div>
            <div>
              <div className={styles.metricValue}>01</div>
              <div className={styles.metricLabel}>Livro</div>
            </div>
            <div>
              <div className={styles.metricValue}>04</div>
              <div className={styles.metricLabel}>Palestras</div>
            </div>
          </div>
        </div>

        <div className={styles.bookCard}>
          <div className={styles.bookHeading}>Livro publicado</div>
          <div className={styles.bookRow}>
            <div>
              <div className={styles.bookTitle}>Guia Prático de Clínica Médica</div>
              <div className={styles.bookAuthors}>
                FERRAZ, A. R.; BREVES, R. C.; PORTO, G. M. A.; MARTINS, P. H. P.
              </div>
            </div>
            <div className={styles.bookMeta}>1ª edição · 2024</div>
          </div>
        </div>

        <div className={styles.pubGrid}>
          <div>
            <div className={styles.colHeading}>Artigos completos em periódicos</div>
            {artigos.map((a) => (
              <div key={a.titulo} className={styles.articleRow}>
                <div className={styles.rowTop}>
                  <span className={styles.rowTag}>{a.rev}</span>
                  <span className={styles.rowMeta}>{a.ref}</span>
                </div>
                <div className={styles.articleTitle}>{a.titulo}</div>
                <div className={styles.articleAuthors}>{a.autores}</div>
              </div>
            ))}
            <div className={styles.articleRow}>
              <span className={styles.rowTag}>Demais produções técnicas</span>
              <div className={styles.articleTitle}>
                Processo Transexualizador: as mudanças nos aspectos biopsicossociais
              </div>
              <div className={styles.articleAuthors}>BREVES, R. C. · 2018</div>
            </div>
          </div>

          <div>
            <div className={styles.colHeading}>Apresentações de trabalho e palestras</div>
            {palestras.map((p) => (
              <div key={p.titulo} className={styles.talkRow}>
                <div className={styles.rowTop}>
                  <span className={styles.rowTag}>{p.tipo}</span>
                  <span className={styles.rowMeta}>{p.ano}</span>
                </div>
                <div className={styles.talkTitle}>{p.titulo}</div>
                <div className={styles.talkAuthors}>{p.autores}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mediaCard}>
          <div className={styles.mediaTop}>
            <div className={styles.mediaHeading}>
              Entrevistas, mesas redondas e comentários na mídia
            </div>
            <span className={styles.rowMeta}>2023</span>
          </div>
          <div className={styles.mediaGrid}>
            {midia.map((m, i) => (
              <div key={m.titulo} className={styles.mediaItem}>
                <div className={styles.mediaIndex}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className={styles.mediaItemTitle}>{m.titulo}</div>
                  <div className={styles.mediaItemAuthors}>{m.autores}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
