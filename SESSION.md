# SESSION.md — Portfolio Rodrigo Palomino

## O que foi feito nesta sessão

- Projeto scaffoldado com Vite + React 19
- Dependências: gsap, lucide-react, tailwindcss v3.4.17, postcss, autoprefixer
- Tailwind configurado com tokens do Preset C (Brutalist Signal):
  - Papel #E8E4DD, Sinal (vermelho) #E63B2E, Off-white #F5F3EE, Preto #111111
  - Fontes: Space Grotesk (sans), DM Serif Display (serif), Space Mono (mono)
- App.jsx completo com: Navbar, Hero, StatsBar, About, Features (3 cards interativos), Philosophy, Projects, Protocol, Experience, Contact, Footer
- Build verificado sem erros (npm run build)
- Deploy na VPS (187.77.57.158) via docker cp para palomino-tech_portfolio
- Repositório criado: https://github.com/profissionalpalomino/portfolio-rodrigo
- Código enviado para GitHub (master)

## Onde paramos

- Site no ar na VPS, servido via nginx pelo container palomino-tech_portfolio
- Deploy manual: editar source → npm run build → scp dist/* → bash deploy_script.sh
- Código no GitHub: profissionalpalomino/portfolio-rodrigo (master)

## Próximas tarefas

1. [ ] Atualizar número de WhatsApp real (buscar "5511999999999" no App.jsx)
2. [ ] Atualizar projetos com links reais (href="#" nos cards de Projects)
3. [ ] Adicionar foto de perfil na seção About (opcional)
4. [ ] Configurar domínio customizado no Easypanel para o portfolio
5. [ ] Atualizar experiência profissional com dados reais do LinkedIn
