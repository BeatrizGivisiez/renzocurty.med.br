# UI kit · Site institucional

Recriação das telas do site `Site Dr Renzo Curty.dc.html`, que é a fonte de verdade deste design system.

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `index.html` | Montagem navegável: cabeçalho fixo, hero, atuação profissional e contato com formulário funcional (escolha de motivo e confirmação de envio). |
| `SiteHeader.jsx` | Cabeçalho fixo com monograma, navegação e botão de agendamento. |
| `HeroScreen.jsx` | Hero: rótulo, título em serifa, lead, dois botões, três indicadores e foto com véu lateral. |
| `RolesScreen.jsx` | Seção 03: grade de `RoleCard`, com os vínculos ativos em campo verde cheio. |
| `ContactScreen.jsx` | Seção 07: faixa de dados do ambulatório e formulário de solicitação. |

## Seções do site não recriadas aqui

O site tem sete seções. Este kit cobre as três que definem o vocabulário visual (hero, grade de cards, formulário). As outras quatro reutilizam os mesmos componentes:

- **01 Sobre** — retrato com painel de acento, dois parágrafos e faixa de três listas tipográficas.
- **02 Trajetória** — `ListRow` em duas colunas, com um bloco escuro de prêmios.
- **04 Áreas remotas** — seção verde escura com `ImageCard` e `ListRow` em tom escuro.
- **05 NEABI** — `ImageCard` grande com véu forte, mais dois cards de apoio.
- **06 Produção** — `ListRow` para artigos e palestras, com o livro em bloco escuro destacado.

## Observação sobre dados

Todo o conteúdo textual sai do Currículo Lattes (`assets/curriculo.pdf`) ou de informação passada pelo cliente. Não há número, caso clínico ou depoimento inventado. Ao estender o kit, mantenha essa regra.
