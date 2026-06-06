import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight, Mail, Calendar,
  MessageCircle, Zap, Bot, Rocket, ChevronRight,
  MapPin, ExternalLink
} from 'lucide-react'

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

gsap.registerPlugin(ScrollTrigger)

// ─── Noise Overlay ───────────────────────────────────────────────────────────
function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 ${
        scrolled
          ? 'bg-offwhite/80 backdrop-blur-xl border border-papel shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#inicio"
        className={`font-mono text-sm font-bold tracking-widest uppercase transition-colors ${
          scrolled ? 'text-preto' : 'text-offwhite'
        }`}
      >
        RP
      </a>

      <div className="hidden md:flex items-center gap-6">
        {['Sobre', 'Projetos', 'Experiência', 'Contato'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')}`}
            className={`font-sans text-sm font-medium transition-colors hover:text-sinal ${
              scrolled ? 'text-preto/70' : 'text-offwhite/80'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contato"
        className={`btn-magnetic rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          scrolled
            ? 'bg-sinal text-white'
            : 'bg-white/10 text-white border border-white/30'
        }`}
      >
        <span className="btn-bg bg-preto" />
        <span className="relative z-10">Falar comigo</span>
      </a>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-item',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-end pb-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-preto via-preto/70 to-preto/20" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <p className="hero-item font-mono text-sinal text-sm tracking-[0.3em] uppercase mb-6">
          Empreendedor Digital · São Paulo, BR
        </p>

        <h1
          className="hero-item font-sans font-bold text-offwhite leading-none tracking-tight mb-2"
          style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
        >
          Rodrigo
        </h1>
        <h1
          className="hero-item font-serif italic text-sinal leading-none mb-8"
          style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
        >
          Palomino.
        </h1>

        <p className="hero-item font-sans text-offwhite/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Construo automações, agentes de IA e produtos digitais que fazem
          negócios crescerem de verdade — sem burocracia, sem jargão técnico.
        </p>

        <div className="hero-item flex flex-wrap gap-4">
          <a
            href="#contato"
            className="btn-magnetic inline-flex items-center gap-2 bg-sinal text-white rounded-full px-7 py-4 font-semibold text-base"
          >
            <span className="btn-bg bg-preto" />
            <span className="relative z-10">Agendar Conversa</span>
            <Calendar size={18} className="relative z-10" />
          </a>
          <a
            href="#projetos"
            className="btn-magnetic inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white rounded-full px-7 py-4 font-semibold text-base backdrop-blur-sm"
          >
            <span className="btn-bg bg-white/20" />
            <span className="relative z-10">Ver Projetos</span>
            <ArrowUpRight size={18} className="relative z-10" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-16 bg-white" />
        <span
          className="font-mono text-white text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL
        </span>
      </div>
    </section>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: '3+', label: 'anos construindo' },
    { value: '30+', label: 'projetos entregues' },
    { value: '100%', label: 'foco em resultado' },
    { value: 'R$0', label: 'burocracia entregue' },
  ]

  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-preto px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-item text-center md:text-left">
            <div className="font-sans font-bold text-sinal" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {s.value}
            </div>
            <div className="font-mono text-offwhite/40 text-xs tracking-widest uppercase mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-item',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="sobre" ref={ref} className="bg-offwhite px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="about-item font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-4">
            Quem sou
          </p>
          <h2
            className="about-item font-sans font-bold text-preto leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Não sou só
            <br />
            <span className="font-serif italic text-sinal">desenvolvedor.</span>
          </h2>
          <p className="about-item font-sans text-preto/60 text-base leading-relaxed mb-4">
            Comecei com dados e análise — aprendi a ver padrões onde outros veem caos.
            Hoje aplico isso de um jeito diferente: construindo sistemas que tornam
            pequenos negócios mais eficientes, previsíveis e escaláveis.
          </p>
          <p className="about-item font-sans text-preto/60 text-base leading-relaxed">
            Sou fundador da <strong className="text-preto font-semibold">Palomino Tech</strong>,
            onde entrego automações, agentes de IA e produtos digitais para empreendedores
            que querem crescer sem contratar um time de tecnologia inteiro.
          </p>
        </div>

        <div className="about-item grid grid-cols-2 gap-4">
          {[
            { icon: <Zap size={20} />, title: 'Automação', desc: 'Processos manuais viram sistemas automáticos' },
            { icon: <Bot size={20} />, title: 'Agentes IA', desc: 'Sistemas que operam seu negócio enquanto você dorme' },
            { icon: <Rocket size={20} />, title: 'Produtos', desc: 'MVPs e sites que convertem visitantes em clientes' },
            { icon: <MapPin size={20} />, title: 'São Paulo', desc: 'Atendo clientes de todo o Brasil, 100% remoto' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-papel rounded-3xl p-5 border border-preto/5"
            >
              <div className="text-sinal mb-3">{item.icon}</div>
              <div className="font-sans font-semibold text-preto text-sm mb-1">{item.title}</div>
              <div className="font-sans text-preto/50 text-xs leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features — 3 Interactive Cards ──────────────────────────────────────────
function ShufflerCard() {
  const items = [
    { label: 'Integração de ferramentas', tag: 'Make / N8N / Zapier' },
    { label: 'Fluxos automáticos', tag: 'CRM · Estoque · Financeiro' },
    { label: 'Zero trabalho manual', tag: 'Elimine retrabalho hoje' },
  ]
  const [order, setOrder] = useState([0, 1, 2])

  useEffect(() => {
    const id = setInterval(() => {
      setOrder((prev) => {
        const arr = [...prev]
        arr.unshift(arr.pop())
        return arr
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-offwhite border border-preto/10 rounded-4xl p-6 flex flex-col gap-4 h-64 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans font-bold text-preto text-sm">Automação de Processos</span>
        <span className="font-mono text-xs text-preto/30">01</span>
      </div>
      <div className="relative flex-1">
        {order.map((idx, pos) => (
          <div
            key={idx}
            className="absolute w-full transition-all duration-700"
            style={{
              top: `${pos * 52}px`,
              opacity: pos === 0 ? 1 : pos === 1 ? 0.6 : 0.25,
              transform: pos === 0 ? 'scale(1)' : 'scale(0.97)',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 3 - pos,
            }}
          >
            <div className={`rounded-2xl px-4 py-3 border flex items-center justify-between ${
              pos === 0 ? 'bg-sinal border-sinal' : 'bg-papel border-preto/10'
            }`}>
              <span className={`font-sans text-sm font-medium ${pos === 0 ? 'text-white' : 'text-preto/60'}`}>
                {items[idx].label}
              </span>
              <span className={`font-mono text-xs hidden md:block ${pos === 0 ? 'text-white/70' : 'text-preto/30'}`}>
                {items[idx].tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypewriterCard() {
  const messages = [
    'Recebendo lead do formulário...',
    'Qualificando com IA → score: 87/100',
    'Enviando proposta personalizada ✓',
    'Agendando follow-up em 48h ✓',
    'Lead convertido em cliente ★',
  ]
  const [displayed, setDisplayed] = useState('')
  const [msgIndex, setMsgIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = messages[msgIndex]
    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 45)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setMsgIndex((m) => (m + 1) % messages.length)
        setCharIndex(0)
        setDisplayed('')
      }, 1800)
      return () => clearTimeout(t)
    }
  }, [charIndex, msgIndex])

  return (
    <div className="bg-preto border border-preto/10 rounded-4xl p-6 flex flex-col gap-4 h-64">
      <div className="flex items-center justify-between">
        <span className="font-sans font-bold text-white text-sm">Agentes de IA</span>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-sinal pulse-dot" />
          <span className="font-mono text-xs text-white/30">LIVE</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {messages.slice(0, msgIndex).map((m, i) => (
          <div key={i} className="font-mono text-xs text-white/25 truncate">{m}</div>
        ))}
        <div className="font-mono text-xs text-sinal flex items-center gap-0.5">
          <span>{displayed}</span>
          <span className="w-1.5 h-3.5 bg-sinal inline-block cursor-blink" />
        </div>
      </div>
      <div className="font-mono text-xs text-white/20">02 / Agente de Vendas Ativo</div>
    </div>
  )
}

function SchedulerCard() {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const [activeDay, setActiveDay] = useState(null)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const sequence = [
      () => { setActiveDay(null); setPhase(0) },
      () => { setActiveDay(1); setPhase(1) },
      () => { setActiveDay(3); setPhase(2) },
      () => { setActiveDay(5); setPhase(3) },
      () => { setPhase(4) },
    ]
    let step = 0
    const run = () => { sequence[step](); step = (step + 1) % sequence.length }
    run()
    const id = setInterval(run, 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-offwhite border border-preto/10 rounded-4xl p-6 flex flex-col gap-4 h-64">
      <div className="flex items-center justify-between">
        <span className="font-sans font-bold text-preto text-sm">Produtos Digitais</span>
        <span className="font-mono text-xs text-preto/30">03</span>
      </div>
      <div className="font-mono text-xs text-preto/40 mb-1">CRONOGRAMA DE ENTREGA</div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div
            key={i}
            className={`rounded-xl py-2.5 flex flex-col items-center gap-1 transition-all duration-300 ${
              activeDay === i ? 'bg-sinal scale-95' : 'bg-papel border border-preto/10'
            }`}
          >
            <span className={`font-mono text-xs font-bold ${activeDay === i ? 'text-white' : 'text-preto/40'}`}>
              {d}
            </span>
          </div>
        ))}
      </div>
      <div className={`transition-all duration-500 rounded-2xl px-4 py-2.5 flex items-center justify-between ${
        phase >= 4 ? 'bg-sinal' : 'bg-papel border border-preto/10'
      }`}>
        <span className={`font-sans text-xs font-semibold ${phase >= 4 ? 'text-white' : 'text-preto/50'}`}>
          {phase >= 4 ? 'Entregue ✓ MVP em 14 dias' : 'Aguardando confirmação...'}
        </span>
        <span className={`font-mono text-xs ${phase >= 4 ? 'text-white/70' : 'text-preto/20'}`}>SAVE</span>
      </div>
    </div>
  )
}

function Features() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-papel px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-4">O que faço</p>
        <h2
          className="font-sans font-bold text-preto leading-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Não vendo serviço.
          <br />
          <span className="font-serif italic text-sinal">Entrego resultado.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="feature-card"><ShufflerCard /></div>
          <div className="feature-card"><TypewriterCard /></div>
          <div className="feature-card"><SchedulerCard /></div>
        </div>
      </div>
    </section>
  )
}

// ─── Philosophy ───────────────────────────────────────────────────────────────
function Philosophy() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.philo-item',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-preto px-6 md:px-16 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1600&q=70&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="philo-item font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-12">
          Filosofia
        </p>

        <div className="philo-item mb-8">
          <p className="font-sans text-offwhite/40 text-lg md:text-xl leading-relaxed">
            A maioria dos prestadores de tecnologia foca em:
            <br />
            <span className="text-offwhite/60 italic">features, stacks modernas e MVPs que nunca saem do papel.</span>
          </p>
        </div>

        <div className="philo-item">
          <p
            className="font-serif italic text-offwhite leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Eu foco em{' '}
            <span className="text-sinal">resultados</span>
            <br />
            que você consegue
            <br />
            <span className="text-sinal">medir.</span>
          </p>
        </div>

        <div className="philo-item mt-12 h-px bg-gradient-to-r from-sinal to-transparent" />

        <div className="philo-item mt-8 flex flex-wrap gap-4">
          {['ROI em semanas', 'Zero buzzword', 'Claro do início ao fim', 'Dono do próprio sistema'].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-offwhite/50 border border-offwhite/20 rounded-full px-4 py-2 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    year: '2024',
    tag: 'SaaS · Automação',
    title: 'Palomino Tech',
    desc: 'Plataforma de construção de automações, landing pages e agentes de IA para pequenos negócios. Do zero ao produto com clientes recorrentes.',
    link: '#',
  },
  {
    year: '2024',
    tag: 'Agente IA · WhatsApp',
    title: 'Atendente Virtual IA',
    desc: 'Agente de atendimento que responde, qualifica leads e agenda reuniões autonomamente via WhatsApp. Integrado com CRM e Google Calendar.',
    link: '#',
  },
  {
    year: '2024',
    tag: 'Landing Page · GSAP',
    title: 'Sites Cinematográficos',
    desc: 'Sistema de criação de landing pages de alta fidelidade com animações GSAP, preset de design e geração de copy por IA.',
    link: '#',
  },
  {
    year: '2023',
    tag: 'Automação · Dados',
    title: 'Pipeline de Dados Automático',
    desc: 'Sistema de coleta, tratamento e visualização de dados de vendas para rede de varejo. Eliminou 40h/mês de trabalho manual.',
    link: '#',
  },
  {
    year: '2023',
    tag: 'E-commerce · Bot',
    title: 'Bot de Gestão de Estoque',
    desc: 'Automação para sincronizar estoque entre Shopify, Mercado Livre e planilhas em tempo real com alertas inteligentes.',
    link: '#',
  },
  {
    year: '2023',
    tag: 'Dashboard · BI',
    title: 'Dashboard Executivo',
    desc: 'Painel de controle em tempo real para acompanhamento de métricas de vendas, CAC, LTV e churn. Integrado com múltiplas fontes.',
    link: '#',
  },
]

function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projetos" ref={ref} className="bg-offwhite px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-4">Projetos</p>
        <h2
          className="font-sans font-bold text-preto leading-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Coisas que construí
          <br />
          <span className="font-serif italic text-sinal">e que funcionam.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="project-card group bg-papel rounded-4xl p-6 border border-preto/5 flex flex-col gap-4 hover:border-sinal/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-preto/30">{p.year}</span>
                <ExternalLink size={14} className="text-preto/20 group-hover:text-sinal transition-colors" />
              </div>
              <div>
                <span className="inline-block font-mono text-xs text-sinal bg-sinal/10 rounded-full px-3 py-1 mb-3">
                  {p.tag}
                </span>
                <h3 className="font-sans font-bold text-preto text-base mb-2 group-hover:text-sinal transition-colors">
                  {p.title}
                </h3>
                <p className="font-sans text-preto/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 font-sans text-xs font-semibold text-preto/30 group-hover:text-sinal transition-colors">
                Ver projeto <ChevronRight size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Protocol (Cards Empilháveis) ─────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Mapeio os processos do seu negócio, identifico gargalos e defino exatamente o que precisa ser automatizado ou construído.',
    visual: 'helix',
  },
  {
    num: '02',
    title: 'Construção',
    desc: 'Desenvolvo o sistema, automação ou produto com entregas incrementais — você vê progresso desde o primeiro dia.',
    visual: 'scan',
  },
  {
    num: '03',
    title: 'Entrega & Autonomia',
    desc: 'Você recebe um sistema funcionando, documentado e que consegue operar sozinho. Sem dependência eterna.',
    visual: 'wave',
  },
]

function HelixSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
      {Array.from({ length: 10 }).map((_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy={12 * i + 6}
          rx={40 - i * 2}
          ry="5"
          stroke="#E63B2E"
          strokeWidth="1.5"
          opacity={1 - i * 0.08}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 60 60; 360 60 60"
            dur={`${3 + i * 0.3}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
    </svg>
  )
}

function ScanSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={8 + col * 14} cy={8 + row * 14} r="2" fill="#E63B2E" opacity="0.3" />
        ))
      )}
      <line x1="4" y1="60" x2="116" y2="60" stroke="#E63B2E" strokeWidth="2">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 -52; 0 52; 0 -52"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  )
}

function WaveSVG() {
  return (
    <svg viewBox="0 0 120 60" className="w-32 h-16" fill="none">
      <path
        d="M0 30 Q15 5 30 30 Q45 55 60 30 Q75 5 90 30 Q105 55 120 30"
        stroke="#E63B2E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="200"
        strokeDashoffset="200"
      >
        <animate attributeName="stroke-dashoffset" values="200;0;200" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}

function Protocol() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      STEPS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.step-card-${i}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-papel px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-4">Como trabalho</p>
        <h2
          className="font-sans font-bold text-preto leading-tight mb-16"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Processo direto,
          <br />
          <span className="font-serif italic text-sinal">sem surpresas.</span>
        </h2>

        <div className="flex flex-col gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`step-card-${i} stack-card bg-offwhite rounded-4xl p-8 md:p-12 border flex flex-col md:flex-row items-center gap-8 transition-all duration-500 ${
                active === i ? 'border-sinal shadow-xl' : 'border-preto/10'
              }`}
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <span className="font-mono text-sinal text-xs tracking-widest">{step.num}</span>
                {step.visual === 'helix' && <HelixSVG />}
                {step.visual === 'scan' && <ScanSVG />}
                {step.visual === 'wave' && <WaveSVG />}
              </div>
              <div>
                <h3
                  className="font-sans font-bold text-preto leading-tight mb-3"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-preto/60 text-base leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    period: '2023 — Presente',
    role: 'Fundador & Desenvolvedor',
    company: 'Palomino Tech',
    desc: 'Construo e entrego automações, agentes de IA e produtos digitais para pequenos e médios negócios em todo o Brasil.',
    tags: ['IA', 'Automação', 'React', 'Python', 'N8N'],
  },
  {
    period: '2021 — 2023',
    role: 'Analista de Dados',
    company: 'Projetos & Consultorias',
    desc: 'Análise de dados de negócios, construção de dashboards e automação de relatórios para empresas de diferentes segmentos.',
    tags: ['Python', 'SQL', 'Power BI', 'ETL'],
  },
  {
    period: '2020 — 2021',
    role: 'Iniciando na tecnologia',
    company: 'Aprendizado & Freelances',
    desc: 'Primeiros projetos de automação e análise de dados. Desenvolvimento de planilhas inteligentes e primeiros sites.',
    tags: ['Excel', 'Python', 'HTML/CSS'],
  },
]

function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-item',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experiencia" ref={ref} className="bg-offwhite px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-4">Trajetória</p>
        <h2
          className="font-sans font-bold text-preto leading-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          De dados a sistemas,
          <br />
          <span className="font-serif italic text-sinal">sempre com propósito.</span>
        </h2>

        <div className="relative pl-6">
          <div className="timeline-line" />
          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.role} className="exp-item">
                <span className="font-mono text-xs text-sinal/70 tracking-widest">{exp.period}</span>
                <h3 className="font-sans font-bold text-preto text-lg mt-1">{exp.role}</h3>
                <p className="font-sans text-sinal font-medium text-sm mb-2">{exp.company}</p>
                <p className="font-sans text-preto/55 text-sm leading-relaxed max-w-xl mb-3">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="font-mono text-xs bg-papel text-preto/50 border border-preto/10 rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const links = [
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: 'Conversa rápida',
      href: 'https://wa.me/5511999999999',
      accent: 'group-hover:border-green-400/50',
    },
    {
      icon: <Mail size={20} />,
      label: 'E-mail',
      value: 'rodrigopalomino2008@gmail.com',
      href: 'mailto:rodrigopalomino2008@gmail.com',
      accent: 'group-hover:border-sinal/40',
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      value: '/in/rodrigopalomino97',
      href: 'https://linkedin.com/in/rodrigopalomino97',
      accent: 'group-hover:border-blue-400/50',
    },
    {
      icon: <Calendar size={20} />,
      label: 'Agendar',
      value: 'Marque 30 minutos',
      href: '#',
      accent: 'group-hover:border-sinal/40',
    },
  ]

  return (
    <section id="contato" ref={ref} className="bg-papel px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="contact-item font-mono text-sinal text-xs tracking-[0.3em] uppercase mb-4">
          Vamos conversar
        </p>
        <h2
          className="contact-item font-sans font-bold text-preto leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
        >
          Tem um projeto
          <br />
          <span className="font-serif italic text-sinal">em mente?</span>
        </h2>
        <p className="contact-item font-sans text-preto/50 text-base max-w-lg mx-auto mb-12 leading-relaxed">
          Respondo em menos de 24h. Se preferir, agende diretamente uma conversa
          de 30 minutos — sem compromisso, sem proposta forçada.
        </p>

        <div className="contact-item grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-offwhite border border-preto/10 rounded-3xl p-5 flex flex-col gap-3 text-left transition-all duration-300 ${l.accent}`}
            >
              <div className="text-preto/40 group-hover:text-sinal transition-colors">{l.icon}</div>
              <div>
                <div className="font-sans font-semibold text-preto text-sm">{l.label}</div>
                <div className="font-mono text-xs text-preto/40 mt-0.5 truncate">{l.value}</div>
              </div>
              <ArrowUpRight size={14} className="text-preto/20 group-hover:text-sinal transition-colors self-end" />
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item btn-magnetic inline-flex items-center gap-3 bg-sinal text-white rounded-full px-10 py-5 font-semibold text-lg"
        >
          <span className="btn-bg bg-preto" />
          <span className="relative z-10">Iniciar conversa agora</span>
          <ArrowUpRight size={20} className="relative z-10" />
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-preto rounded-t-5xl px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-sans font-bold text-offwhite text-2xl mb-2">
              Rodrigo<span className="text-sinal">.</span>
            </div>
            <p className="font-sans text-offwhite/40 text-sm leading-relaxed max-w-xs">
              Empreendedor digital. Construo sistemas, automações e agentes de IA
              para negócios que querem crescer de verdade.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-offwhite/30 tracking-widest uppercase mb-4">Navegação</div>
            <div className="flex flex-col gap-2">
              {['Sobre', 'Projetos', 'Experiência', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')}`}
                  className="font-sans text-sm text-offwhite/50 hover:text-sinal transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-offwhite/30 tracking-widest uppercase mb-4">Contato</div>
            <div className="flex flex-col gap-2">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/rodrigopalomino97' },
                { label: 'E-mail', href: 'mailto:rodrigopalomino2008@gmail.com' },
                { label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
                { label: 'Palomino Tech', href: '#' },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="font-sans text-sm text-offwhite/50 hover:text-sinal transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-offwhite/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-offwhite/25">
            © {new Date().getFullYear()} Rodrigo Palomino. Construído com intenção.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="font-mono text-xs text-offwhite/25 tracking-widest">SISTEMA OPERACIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Features />
        <Philosophy />
        <Projects />
        <Protocol />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
