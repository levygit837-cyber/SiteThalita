# Guia de Contribuição — Site Dra. Thalita Barbosa

## Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js v18+ (recomendado: v20 LTS)
- npm ou pnpm

### Instalação

```bash
git clone <repo-url>
cd SiteThalita
npm install
```

### Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Gera build de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza o build de produção localmente |

## Editando Conteúdo

O conteúdo do site está separado do código em dois formatos:

### JSON (`src/content/data/`)

Use para listas estruturadas:
- `procedimentos.json` — lista de tratamentos
- `faq.json` — perguntas e respostas
- `depoimentos.json` — depoimentos de pacientes

Exemplo de `faq.json`:
```json
[
  {
    "pergunta": "Os procedimentos são dolorosos?",
    "resposta": "A maioria dos procedimentos é minimamente invasiva e causa pouco desconforto."
  }
]
```

### Markdown (`src/content/pages/`)

Use para textos longos e artigos:
- `bio.md` — biografia da Dra. Thalita
- `metodo.md` — descrição do Método Pele Glow

Exemplo de frontmatter:
```markdown
---
title: "Sobre a Dra. Thalita"
description: "Conheça a trajetória da Dra. Thalita Barbosa"
---

# Sobre a Dra. Thalita

Texto aqui...
```

## Deploy

1. Após editar conteúdo ou código, faça commit e push.
2. Execute `npm run build`.
3. Envie o conteúdo da pasta `dist/` para o diretório `public_html` do Hostinger via FTP ou File Manager.

## Convenções de Código

- Componentes Astro: PascalCase (`HeroSection.astro`)
- Arquivos de conteúdo: kebab-case (`procedimentos.json`)
- Classes Tailwind: usar tokens do Design System (ver `tailwind.config.js`)
- Imagens: armazenar em `src/assets/images/` e usar o componente `<Image />` do Astro
