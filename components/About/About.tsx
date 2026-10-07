import Image from "next/image";
import { Siren, Buildings, FileText, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import NumberedList from "@/components/NumberedList/NumberedList";
import styles from "./About.module.css";

const areasAtuacao = ["Ciências da Saúde · Medicina", "Administração · Gestão em Saúde"];

const interessesTecnicos = [
  "Gestão de redes de atenção",
  "Planejamento estratégico em saúde",
  "Educação médica",
  "Assistência em contextos remotos",
];

const compromissoSocial = ["Equidade racial", "Saúde coletiva", "Políticas públicas"];

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.top}>
        <div className={styles.mediaWrap}>
          <div className={styles.mediaInner}>
            <div className={styles.mediaBlock} />
            <div className={styles.mediaBlockBorder} />
            <div className={styles.photo}>
              <Image
                src="/images/renzo3.jpeg"
                alt="Dr. Renzo Curty"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
              />
            </div>
            <div className={styles.plate}>
              <div className={styles.plateName}>Dr. Renzo Curty</div>
              <div className={styles.plateRole}>Médico · Gestor em Saúde Pública</div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.eyebrow}>01 · Sobre</div>
          <h1 className={styles.title}>
            Clínica, gestão e ensino
            <br />
            no mesmo movimento.
          </h1>
          <p className={styles.paragraph}>
            Médico pela Universidade de Vassouras e gestor em Saúde Pública, com pós-graduações em
            Psicanálise Clínica e em Docência no Ensino Superior e Metodologias Ativas. Dedica-se
            à produção científica na área médica, além de coordenar projetos focados em saúde
            coletiva, políticas públicas e equidade racial.
          </p>
          <p className={styles.paragraph}>
            Atualmente, é Diretor Médico da Associação Brasileira de Medicina de Áreas Remotas
            (ABMAR), onde atua na elaboração de diretrizes técnicas e qualificação científica.
            Possui uma sólida trajetória em liderança e articulação institucional, tendo presidido
            o Diretório Central dos Estudantes da Universidade de Vassouras e exercido funções de
            coordenação regional na Direção Executiva Nacional dos Estudantes de Medicina (DENEM).
          </p>
        </div>
      </div>

      <div className={styles.lists}>
        <div>
          <div className={styles.listHeading}>Áreas de atuação</div>
          <NumberedList items={areasAtuacao} />
        </div>
        <div>
          <div className={styles.listHeading}>Interesses técnicos</div>
          <NumberedList items={interessesTecnicos} />
        </div>
        <div>
          <div className={styles.listHeading}>Compromisso social</div>
          <NumberedList items={compromissoSocial} />
        </div>
      </div>

      <div className={styles.facts}>
        <div className={styles.factItem}>
          <div className={styles.factLabel}>
            <Siren size={13} />
            Urgência e emergência
          </div>
          <div className={styles.factValue}>Hospital Municipal Luiz Gonzaga</div>
          <div className={styles.factSub}>Plantão de 24h semanais</div>
        </div>
        <div className={styles.factItem}>
          <div className={styles.factLabel}>
            <Buildings size={13} />
            Institucional
          </div>
          <div className={styles.factValue}>Diretoria Médica · ABMAR</div>
          <div className={styles.factSub}>Medicina de áreas remotas</div>
        </div>
        <div className={styles.factItem}>
          <div className={styles.factLabel}>
            <FileText size={13} />
            Currículo
          </div>
          <a href="/curriculo.pdf" target="_blank" className={styles.factLink}>
            Currículo Lattes
            <ArrowUpRight size={13} weight="bold" />
          </a>
          <div className={styles.factSub}>lattes.cnpq.br/9074086930172329</div>
        </div>
      </div>
    </section>
  );
}
