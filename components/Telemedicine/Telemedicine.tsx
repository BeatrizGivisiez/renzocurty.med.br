import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  ChatCircleText,
  ClipboardText,
  DeviceMobile,
  Files,
  FileText,
  House,
  Phone,
  Prescription,
  SealCheck,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { whatsappNumero } from "@/lib/data";
import styles from "./Telemedicine.module.css";

const mensagem = "Olá, Dr. Renzo Curty! Vim pelo site e gostaria de agendar uma teleconsulta.";
const whatsappUrl = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

const beneficios = [
  { icon: CalendarCheck, titulo: "Horário agendado", texto: "Você escolhe o melhor momento" },
  { icon: House, titulo: "Sem fila de espera", texto: "Atendimento de onde estiver" },
  { icon: FileText, titulo: "Receitas e documentos", texto: "Médicos, emitidos online*" },
];

const documentos = [
  { icon: Prescription, label: "Receita digital" },
  { icon: ClipboardText, label: "Pedido de exames" },
  { icon: SealCheck, label: "Atestado médico" },
  { icon: Files, label: "Documentos online" },
];

const passos = [
  { n: "01", titulo: "Chame no WhatsApp", texto: "Envie uma mensagem para o número de agendamento." },
  { n: "02", titulo: "Agende o horário", texto: "Combine o dia e a hora da sua teleconsulta." },
  { n: "03", titulo: "Consulte pelo celular", texto: "Atendimento médico online, no conforto da sua casa." },
];

export default function Telemedicine() {
  return (
    <section id="telemedicina" className={styles.section}>
      <div className={styles.rings} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>
              <span className={styles.diamond} />
              Teleconsulta
            </div>

            <h2 className={styles.title}>
              Consulta médica
              <br />
              <span className={styles.titleEm}>por telemedicina</span>
            </h2>

            <p className={styles.lead}>
              Atendimento médico online, <strong>no conforto da sua casa.</strong> Consulte com o
              Dr. Renzo Curty pelo celular, com horário marcado e sem deslocamento.
            </p>

            <ul className={styles.benefits}>
              {beneficios.map(({ icon: Icon, titulo, texto }) => (
                <li key={titulo} className={styles.benefit}>
                  <span className={styles.benefitIcon}>
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className={styles.benefitTitle}>{titulo}</span>
                    <span className={styles.benefitText}>{texto}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                <ChatCircleText size={18} weight="bold" />
                Agendar teleconsulta
              </a>
              <a href="#contato" className={styles.secondary}>
                Prefiro presencial
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.call}>
              <div className={styles.callBar}>
                <span className={styles.live} />
                Teleconsulta
                <VideoCamera size={14} className={styles.callBarIcon} />
              </div>
              <div className={styles.callStage}>
                <Image
                  src="/dr-renzo-curty.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 540px"
                  className={styles.photo}
                />
                <div className={styles.doctor}>
                  <div className={styles.doctorName}>Dr. Renzo Curty</div>
                  <div className={styles.doctorRole}>Médico · CRM/RJ 52.140936-9</div>
                </div>
                <div className={styles.patient}>
                  <DeviceMobile size={22} />
                  <span>
                    <span className={styles.patientDot} />
                    Paciente em casa, pelo celular
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.docs}>
              {documentos.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.doc}>
                  <span className={styles.docIcon}>
                    <Icon size={16} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaPhone}>
            <span className={styles.ctaIcon}>
              <Phone size={22} weight="fill" />
            </span>
            <div>
              <div className={styles.ctaLabel}>Agende sua consulta</div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaNumber}>
                (24) 99828-0630
              </a>
            </div>
          </div>
          <ol className={styles.steps}>
            {passos.map((p) => (
              <li key={p.n} className={styles.step}>
                <span className={styles.stepNum}>{p.n}</span>
                <span className={styles.stepTitle}>{p.titulo}</span>
                <span className={styles.stepText}>{p.texto}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className={styles.footnote}>
          *Quando indicado pelo médico e conforme a legislação vigente.
        </p>
      </div>
    </section>
  );
}
