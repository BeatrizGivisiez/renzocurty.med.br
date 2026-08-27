# Dr. Renzo Curty · Design System

Sistema visual do site profissional do **Dr. Renzo Curty**, médico e gestor em saúde pública.

A fonte de verdade é o arquivo **`Site Dr Renzo Curty.dc.html`** deste projeto: os tokens, componentes e regras abaixo foram extraídos dele, não de uma biblioteca externa. Quando este documento e o site divergirem, o site vence — e o sistema deve ser atualizado.

---

## Contexto

Renzo Curty é médico formado pela Universidade de Vassouras e graduado em Gestão em Saúde Pública, com pós-graduações em Psicanálise Clínica e em Docência no Ensino Superior. É Diretor Médico da ABMAR (Associação Brasileira de Medicina de Áreas Remotas) e médico servidor público no Hospital Municipal Luiz Gonzaga, em urgência e emergência. Atende no ambulatório de clínica geral do Hospital Flávio Leal, em Piraí (RJ), às quintas e sextas-feiras, por convênio e particular.

O site é institucional e de autoridade: apresenta trajetória, produção científica e atuação em extensão universitária, e oferece o caminho de agendamento.

### Materiais recebidos

| Material | Onde está | Observação |
| --- | --- | --- |
| Currículo Lattes | `assets/curriculo.pdf` | Fonte de **todo** dado factual. `lattes.cnpq.br/9074086930172329` |
| Retratos | `assets/renzo1–4.jpeg`, `assets/wa1–2.jpeg` | Estúdio com fundo branco e registros em ambiente. |
| Registros de campo | `assets/grupo1.jpeg`, `grupo4.jpeg`, `grupo5.jpeg` | Atividade científica da ABMAR e ação junto a comunidade indígena (NEABI). |
| Recorte de retrato | `assets/renzo-recorte.png` | Fundo removido por canal alfa. Não usado no site atual. |
| Preferências do cliente | conversa, 19/08 | "Cores mais fechadas, tipo verde musgo, marrom, tons terrosos" · "Nada de tons pastéis ou neon". |

**Regra de conteúdo absoluta:** nada de dado inventado. Números, cargos, datas, publicações e locais saem do Lattes ou de informação explícita do cliente. Não há depoimentos, estatísticas de atendimento ou casos clínicos no site porque não existem na fonte.

---

## Fundamentos visuais

### Cor

A paleta é fechada e quente. Três famílias:

- **Verdes** — do quase-preto `#131A0E` ao **verde musgo `#55663D`**, que é a cor de marca, subindo até os sálvias `#A8B292` e `#C3CBAE` usados como acento sobre fundo escuro.
- **Terroso** — **marrom `#8A5A3B`**, com uma função única: colorir os rótulos numerados de seção sobre fundo claro.
- **Neutros quentes** — creme `#F5F1E8` e areia `#EDE6D8`, as duas superfícies claras da página.

**Ritmo de superfícies:** a página alterna verde escuro → areia → creme → verde escuro. Nunca mais de dois fundos claros diferentes, e as seções escuras existem para marcar o compasso, não para decorar.

**Fora do sistema:** dourado, amarelo, neon, pastel, roxo-azulado, gradiente colorido. Uma versão inicial do site usava ouro `#C9A227` como acento; foi removido por determinação do cliente. Substitutos: sálvia sobre escuro, marrom sobre claro, creme no botão primário.

### Tipografia

Três famílias, com papéis rígidos e sem sobreposição:

| Família | Papel | Regras |
| --- | --- | --- |
| **Instrument Serif** 400 | Todo título e todo número grande | Tracking sempre negativo (−1,5 px no hero, −1 px em seção). Itálico só na palavra em ênfase do h1. Nunca em corpo de texto. |
| **Archivo** 400/500/600/700 | Corpo, interface, rótulo de campo | Entrelinha 1,6 a 1,7. Medida máxima 60ch. `text-wrap: pretty` em parágrafo, `balance` em título. |
| **JetBrains Mono** 400/500 | Rótulo de seção, metadado, número de linha, dado técnico | Sempre caixa alta com tracking de 1,4 a 2,2 px. É o que dá o ar clínico ao site. |

Título de seção nunca passa de 20ch; lead lateral, de 44ch.

### Layout

Contêiner de 1280 px com gutter de 40 px. Respiro vertical de seção: 110 px. Cabeçalho fixo de 74 px com `backdrop-filter: blur(14px)`.

**A grade de fio é a assinatura estrutural do sistema.** Divisores não são bordas por célula: são `gap: 1px` com a cor do fio no contêiner. Isso evita borda dupla e mantém os fios perfeitamente contínuos.

Listas nunca usam marcador. São linhas separadas por fio de 1 px, com índice em mono à esquerda — formação, publicações, frentes de atuação, tudo segue esse padrão.

Grade ímpar: o último card recebe `grid-column: 1 / -1` e ocupa a largura toda, para não sobrar célula vazia.

### Borda, raio e sombra

Raio **zero** em tudo, com três exceções: 2 px nos botões, 50% nos pontos de status, e nada mais. Sem pílula.

Fios em quatro opacidades sobre claro (.09 faixa, .14 lista, .20 card, .25 forte) e três sobre escuro (.10, .16, .35).

**Sem sombra em superfície plana.** Sombra existe só onde há elevação real: painel sobre fundo escuro (`0 40px 90px rgba(0,0,0,.45)`) e recorte de retrato sobre campo de cor.

### Imagem

Toda foto é tratada igual: sem borda, sem raio, `object-fit: cover`, e **sempre com véu de proteção** — gradiente escuro na base, para o texto pousar em cima. Dois véus: o padrão (transparente até 45%) e o forte (começa no topo, para texto longo).

O `object-position` é ajustado caso a caso para os rostos não caírem atrás do texto. Cor de imagem: quente, sem filtro, sem grão. Houve um experimento de duotone verde no retrato; foi revertido a pedido do cliente, que preferiu a foto em cor natural.

Sobre imagem há também o cartão-véu: fundo `rgba(30,38,23,.82)` com `blur(10px)` e fio de 1 px.

### Movimento e estados

Movimento é mínimo e discreto. Não há entrada animada, parallax, bounce ou contador. O único keyframe do sistema é `rc-pulse`, para ponto de status.

**Hover:** troca de cor, nunca de tamanho. Link muda de musgo para marrom. Botão primário troca creme por sálvia. Botão secundário acende a borda. Card não levanta, não escala, não ganha sombra.

Transição de 180 ms com `cubic-bezier(.2,.6,.2,1)` em cor e borda.

---

## Fundamentos de conteúdo

Idioma: **português brasileiro**, sempre.

**Nome.** Sempre "Renzo Curty" ou "Dr. Renzo Curty". Nunca "Renzo Curty Breves". Única exceção: citação bibliográfica, indexada no Lattes como "BREVES, R. C." — mantida como está na fonte.

**Pontuação.** **Não se usa travessão (—).** O separador do sistema é o ponto médio (·): em rótulos ("04 · Áreas remotas"), períodos ("2024 · 2026"), localidades ("Piraí · RJ") e listas curtas. Onde o travessão faria papel de aposto, reescreve-se a frase com vírgula ou dois pontos.

**Tom.** Equilíbrio entre técnico e acessível. Frases afirmativas e curtas. Terceira pessoa ("Atua na interface entre…"), nunca primeira. Sem superlativo, sem "excelência", sem promessa de resultado — publicidade médica no Brasil é regulada pelo CFM.

**Casing.** Título em caixa normal. Rótulo em caixa alta, só em mono. Sem Title Case Em Português.

**Números.** Dois dígitos em contagem ("05 formações"). Ano completo. Telefone no formato "(24) 3511-5600".

**Emoji: nunca.**

Exemplos do tom:

> "Supervisão técnica e científica das atividades médicas da entidade: qualidade e segurança dos protocolos assistenciais, elaboração de diretrizes clínicas e representação institucional em pautas técnicas."

> "Este formulário não substitui atendimento de urgência. Em emergências, procure o serviço de saúde mais próximo ou ligue 192."

---

## Iconografia

**O sistema não usa ícones.** Não há biblioteca de ícones, fonte de ícone, sprite ou SVG decorativo no site, e isso é deliberado: a hierarquia é construída com tipografia, fio e cor.

O que substitui ícone:

- **Índice em mono** ("01", "02") no lugar de marcador de lista.
- **Ponto de 5–6 px** (`border-radius: 50%`) como indicador de estado, em verde-claro para ativo e cinza para encerrado.
- **Losango** (quadrado de 5 px rotacionado 45°) como ornamento de separador em assinatura.
- **Seta unicode ↗** em link externo. É o único caractere usado como sinal gráfico.
- **Fio de 1 px** como divisor e como sublinhado de link.

Se um ícone se tornar necessário, use **Lucide** via CDN (traço de 1,5 px, cantos retos, que combina com a densidade do sistema) e registre a decisão aqui. Não desenhe SVG à mão e não use emoji.

### Marca

**Não existe logotipo aprovado.** A assinatura é o nome em Instrument Serif, acompanhado do monograma "RC" dentro de uma caixa de fio de 1 px — que é um recurso tipográfico, não uma marca gráfica.

Há um estudo de monograma em `Logo Renzo Curty.dc.html` (R + C entrelaçados com serpente e bastão de Asclépio, em vetor), feito como **proposta não aprovada**. Não o trate como identidade oficial até o cliente aprovar.

---

## Índice

| Caminho | O que é |
| --- | --- |
| `styles.css` | Entrada única de CSS. Só `@import`. |
| `tokens/colors.css` | Paleta base e aliases semânticos, mais a lista do que é proibido. |
| `tokens/typography.css` | Famílias, escala, pesos, entrelinhas, tracking, medidas. |
| `tokens/spacing.css` | Escala de espaço, contêiner, gutter, respiro de seção. |
| `tokens/borders.css` | Raios, fios, sombras, véus de imagem. |
| `tokens/motion.css` | Duração, easing e o keyframe `rc-pulse`. |
| `tokens/fonts.css` | Carregamento das fontes. |
| `components/core/` | `Button`, `Eyebrow`, `SectionHeading`, `StatusBadge`, `Chip` |
| `components/content/` | `RoleCard`, `MetricStat`, `ListRow`, `InfoCell` |
| `components/media/` | `ImageCard` |
| `components/forms/` | `TextField` |
| `ui_kits/site/` | Recriação navegável do site. Ver o README de lá. |
| `guidelines/` | 14 cards de especimen que populam a aba Design System. |
| `assets/` | Fotos, currículo em PDF, recorte de retrato. |
| `SKILL.md` | Empacotamento como Agent Skill. |

### Adições intencionais

Todos os componentes correspondem a padrões que já existem no site. Duas notas:

- **`Chip`** cobre dois usos que no site têm estilos ligeiramente diferentes (etiqueta de assunto e escolha de formulário), unificados aqui numa variante `selected`.
- **`SectionHeading`** empacota a composição rótulo + título + lead que se repete em todas as sete seções.

Nenhum componente foi inventado além do que o site define. Não há Toast, Avatar, Tabs, Modal ou Tooltip porque o site não tem nenhum desses.

---

## Pendências

- **CRM-RJ ainda não informado.** É exigência do CFM em publicidade médica; o site tem um espaço reservado no rodapé com "a informar".
- **Arquivos de fonte.** Instrument Serif, Archivo e JetBrains Mono vêm do Google Fonts. Se houver licença própria, substituir por `@font-face` local em `tokens/fonts.css`.
- **Lista de convênios** não fornecida; o site diz apenas "convênios e particular".
- **Logotipo** não aprovado (ver Marca).
