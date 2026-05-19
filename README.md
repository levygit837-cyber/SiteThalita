<div align="center">

# Dra. Thalita Barbosa — Medicina Estética

**Site institucional de alta conversão para clínica de medicina estética.**<br>
*Design sofisticado, performance nativa e arquitetura pronta para escalar.*

[![Astro](https://img.shields.io/badge/Astro-6.3-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node](https://img.shields.io/badge/Node-22+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Status](https://img.shields.io/badge/status-em%20produção-10B981)](https://github.com/levygit837-cyber/SiteThalita)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

</div>

---

## 🎯 O Desafio

A Dra. Thalita Barbosa, médica esteta, precisava de um site que transmitisse **sofisticação, confiança e naturalidade** — valores centrais da marca. O projeto exigia:

- **Identidade visual premium** (paleta rosé/nude, tipografia serifada, glassmorphism)
- **Conteúdo rico em SEO** para captar pacientes via Google
- **Multilíngue** (PT-BR + ES) para atender público internacional
- **Performance impecável** em mobile (público majoritariamente feminino, 25-45 anos)
- **Pipeline de deploy automatizado** para iterações rápidas com o cliente

> 💡 *Resultado: site estático com build < 2s, zero JS desnecessário e Lighthouse 95+ estimado.*

---

## 🛠 Stack & Tecnologias

| Camada | Tecnologia | Por quê |
|--------|-----------|---------|
| **Framework** | [Astro 6.3](https://astro.build) | SSG nativo, "zero JS by default", ótimo para SEO e conteúdo |
| **Styling** | [Tailwind CSS 4.3](https://tailwindcss.com) | Design system customizado com `@theme`, builds rápidos via Vite |
| **Ícones** | [Phosphor Icons](https://phosphoricons.com) | Consistência visual, peso leve |
| **Fontes** | Playfair Display + Manrope | Contrasto serif/sans-serif para sofisticação e legibilidade |
| **Deploy** | GitHub Pages + Netlify | CI/CD com GitHub Actions; Netlify para preview e redirects |
| **i18n** | Sistema próprio (vanilla JS) | Controle total sobre hidratação e SEO sem overhead de libs |

---

## ✨ Destaques de Design & UX

### 🎨 Design System Próprio
- **Paleta cromática exclusiva**: graphite, pearl, nude, blush, rose — tons que evocam pele saudável e elegância.
- **Tokens semânticos**: `shadow-glass`, `glass-panel-dark`, `bg-pattern-grid`, `bg-organic-blobs`.
- **Tipografia fluida**: `clamp()` em headings para escalar de mobile (2.5rem) a desktop (4.75rem).

### ⚡ Performance & Interatividade Seletiva
- **Zero JS no primeiro paint**: Astro entrega HTML puro; apenas o essencial é hidratado.
- **Scroll Reveal**: `IntersectionObserver` nativo para animações de entrada (fade, slide, stagger).
- **Timeline interativa**: barra de progresso sincronizada com scroll na jornada do paciente.
- **Accordion CSS-only**: usando `grid-template-rows` com transição suave — nenhuma lib necessária.

### 🌍 Internacionalização (PT-BR / ES)
- Sistema de traduções em JSON com chaves aninhadas (`hero.headline`, `sobre.bio`).
- Troca de idioma em tempo real via `CustomEvent`, persistida no `localStorage`.
- Meta tags (`title`, `description`) atualizadas dinamicamente conforme o idioma.

### 📱 Mobile-First
- Header com `backdrop-blur` e transição de opacidade no scroll.
- CTA flutuante fixo (`MobileCTA`) para conversão imediata em telas pequenas.
- Imagens com `object-contain` e `dvh` units para hero responsivo.

---

## 🏗 Arquitetura

```
SiteThalita/
├── src/
│   ├── components/          # Componentes Astro (Hero, Sobre, Procedimentos, FAQ...)
│   │   ├── UI/              # Design System (Badge, Card, SectionHeader, TimelineItem)
│   │   ├── icons/           # Ícones SVG customizados por categoria
│   │   └── procedimento/    # Layout das páginas de detalhe (/procedimentos/:slug)
│   ├── layouts/
│   │   └── Layout.astro     # Shell HTML com i18n, fonts, SEO meta tags
│   ├── pages/
│   │   ├── index.astro      # Landing page (8 seções)
│   │   ├── procedimentos/
│   │   │   └── [slug].astro # Rotas dinâmicas para 10+ procedimentos
│   │   └── 404.astro        # Página 404 customizada com navegação inteligente
│   ├── data/
│   │   └── procedimentos.ts # Tipagem strict + conteúdo estruturado
│   ├── i18n/
│   │   └── translations.ts  # ~500 linhas de traduções PT/ES
│   ├── styles/
│   │   └── global.css       # Design system, animações, padrões de fundo
│   └── scripts/
│       └── interactions.js  # Header scroll, reveal animations, timeline, accordion
├── public/
│   └── assets/              # Imagens otimizadas, logo, favicon
├── docs/adr/                # 7 Architecture Decision Records documentados
└── .github/workflows/       # Deploy automático para GitHub Pages
```

---

## 🚀 Como Rodar

```bash
# Clone o repositório
git clone https://github.com/levygit837-cyber/SiteThalita.git
cd SiteThalita

# Instale as dependências (Node 22+)
npm install

# Servidor de desenvolvimento
npm run dev        # http://localhost:4321

# Build de produção
npm run build      # gera ./dist/ (HTML estático puro)

# Preview do build
npm run preview
```

---

## 📸 Screenshots

> *Assets visuais do projeto estão disponíveis em `public/assets/` e `design/`. Para visualização ao vivo, o deploy é atualizado automaticamente a cada push na `main`.*

| Hero | Procedimentos | Mobile CTA |
|------|---------------|------------|
| Seção hero com imagem full-height, tipografia fluida e padrão de grid médico | Cards interativos com accordion, ícones customizados e navegação por categoria | Botão flutuante de agendamento otimizado para conversão mobile |

---

## 📋 Decisões Arquiteturais (ADRs)

O projeto conta com **7 ADRs documentados** em `docs/adr/`:

1. **ADR-001** — Astro como SSG (vs. HTML puro vs. Next.js)
2. **ADR-002** — Content Management via JSON/TS local
3. **ADR-003** — Integração externa: WhatsApp para agendamento
4. **ADR-004** — Infraestrutura: Git + Hostinger + GitHub Pages
5. **ADR-005** — SEO & Analytics: GA4 + Search Console
6. **ADR-006** — Styling: Tailwind build-time (v4) vs. CDN
7. **ADR-007** — Paleta de cores: tema claro rosé para transmissão de confiança

> Isso demonstra **pensamento estruturado e documentado** — raro em projetos de estágio/júnior.

---

## ✅ Status

- [x] MVP completo com 8 seções
- [x] 10+ páginas de procedimentos (/procedimentos/:slug)
- [x] i18n PT-BR / ES
- [x] CI/CD com GitHub Actions
- [x] 404 page customizada
- [x] Design system documentado
- [x] ADRs e guia de contribuição
- [ ] Menu mobile hambúrguer (em desenvolvimento)
- [ ] Blog / conteúdo educativo
- [ ] Lighthouse CI integrado

---

## 📄 Licença

Distribuído sob licença MIT. Veja [LICENSE](LICENSE) para detalhes.

---

<div align="center">

**Feito com 💜 e precisão cirúrgica.**

*Quer trocar uma ideia sobre frontend, Astro ou design system? Abre uma issue ou me chama no LinkedIn.*

</div>
