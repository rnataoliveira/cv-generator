# Gerador de CV

Gerador de currículos em React + Vite que permite ao usuário preencher dados, visualizar modelos e exportar PDFs em Português (pt-BR) e Inglês. Ideal para hospedar como site estático no GitHub Pages.

## Funcionalidades

- Editor com visualização em tempo real
- Dois modelos (A / B)
- Suporte a idiomas: Português (pt-BR) e Inglês
- Exportação de PDF no cliente (html2pdf.js)
- Deploy automático no GitHub Pages via GitHub Actions

## Início rápido

Pré-requisitos: Node.js 18+ e npm

1. Instalar dependências

```bash
npm ci
```

2. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Abra http://localhost:5173

## Build & Preview

```bash
npm run build
npm run preview
```

## Testes

Os testes são executados com Vitest:

```bash
npm test
```

## Deploy (GitHub Pages)

Existem duas formas de publicar (escolha uma):

- Publicar a partir da branch `gh-pages` (workflow usa `peaceiris/actions-gh-pages`)
- Publicar a partir da `main` → `/docs` (workflow copia `dist/` para `docs/` e commita)

Se estiver usando `main/docs`, acesse Configurações → Pages e selecione `Branch: main` e `Folder: /docs`.

## Estrutura do projeto

- `src/` — Código fonte React
- `src/locales` — `en.json` e `pt-br.json`
- `src/components` — Templates e componentes UI
- `dist/` — Build de produção

## Contribuições

PRs são bem-vindas. Rode os testes antes de abrir um PR.

## Licença

MIT
