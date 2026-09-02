import {
  ArrowDownRight,
  AtSign,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  ChevronDown,
  CirclePlay,
  Handshake,
  MapPin,
  Package,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react';

const navItems = [
  ['Quem sou', '#sobre'],
  ['O futuro', '#futuro'],
  ['Produtos', '#produtos'],
  ['Parcerias', '#parcerias'],
];

const achievements = [
  { value: 'JUDÔ', label: 'minha essência', icon: Trophy },
  { value: 'CRIAR', label: 'conteúdo que aproxima', icon: Camera },
  { value: 'EVOLUIR', label: 'sempre um passo além', icon: Target },
  { value: 'CONECTAR', label: 'uma comunidade de verdade', icon: Users },
];

const products = [
  { number: '01', title: 'Conteúdo para atletas', text: 'Vídeos diretos sobre técnica, rotina, competição e a cabeça de quem vive o judô.', icon: CirclePlay },
  { number: '02', title: 'Materiais em breve', text: 'Guias e produtos pensados para quem quer evoluir dentro e fora do tatame.', icon: Package },
  { number: '03', title: 'Projetos especiais', text: 'Ideias com propósito para fortalecer a nova geração do judô brasileiro.', icon: Sparkles },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pedro Gozetto, início"><span>PG</span><small>JUDÔ</small></a>
        <nav aria-label="Navegação principal">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="talk-link" href="#contato">Vamos conversar <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ATLETA · CRIADOR · JUDOCA</p>
          <h1>VIVO O<br />JUDÔ.<br /><em>CONTO</em><br />ESSA HISTÓRIA.</h1>
          <p className="hero-text">Sou Pedro Gozetto. Transformo a vivência no tatame em conteúdo para inspirar quem acredita no poder do esporte.</p>
          <div className="hero-actions"><a className="button button-primary" href="#sobre">Conheça minha jornada <ArrowDownRight size={17} /></a><a className="text-action" href="#produtos">Ver projetos <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="portrait-wrap" aria-label="Espaço reservado para foto de Pedro Gozetto">
          <div className="portrait-ring ring-one" /><div className="portrait-ring ring-two" />
          <div className="portrait-placeholder"><Camera size={32} strokeWidth={1.25} /><span>SUA FOTO<br />AQUI</span></div>
          <div className="portrait-caption"><span>JUDOCA</span><strong>EM<br />MOVIMENTO</strong></div><div className="blue-orb" />
        </div>
      </section>

      <section className="statement-strip" aria-label="Princípios">
        {achievements.map(({ value, label, icon: Icon }) => <article key={value}><Icon size={19} strokeWidth={1.65} /><strong>{value}</strong><span>{label}</span></article>)}
      </section>

      <section className="about section" id="sobre">
        <div className="section-label">01 / QUEM SOU EU</div>
        <div className="about-main"><h2>MAIS QUE<br />UM ESPORTE.<br /><span>UM CAMINHO.</span></h2><div className="about-note"><BadgeCheck size={22} /><p>Meu objetivo é mostrar o judô de um jeito real: os aprendizados, as vitórias, os desafios e tudo que o tatame ensina para a vida.</p></div></div>
        <div className="photo-slot wide-photo" aria-label="Espaço reservado para uma imagem de treino ou competição"><Camera size={24} strokeWidth={1.25} /><span>ESPAÇO PARA FOTO DE TREINO, SHIAI OU TATAME</span></div>
      </section>

      <section className="future section" id="futuro">
        <div className="section-label light">02 / OLHANDO PARA FRENTE</div>
        <div className="future-grid"><h2>CONSTRUIR<br />ALGO QUE<br /><span>FIQUE.</span></h2><div className="future-copy"><p>Quero levar o judô para mais pessoas, criar uma comunidade que se apoia e desenvolver projetos que façam diferença na rotina de quem ama o esporte.</p><ul><li><span>01</span> Evoluir como atleta e pessoa</li><li><span>02</span> Inspirar a nova geração</li><li><span>03</span> Criar impacto fora do tatame</li></ul></div></div>
        <div className="future-mark">柔道</div>
      </section>

      <section className="products section" id="produtos">
        <div className="products-heading"><div className="section-label">03 / O QUE ESTOU CRIANDO</div><h2>PROJETOS<br />COM <span>PROPÓSITO.</span></h2></div>
        <div className="product-list">{products.map(({ number, title, text, icon: Icon }) => <article className="product-card" key={number}><div className="card-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#contato" aria-label={`Saiba mais sobre ${title}`}><ArrowUpRight size={19} /></a></article>)}</div>
      </section>

      <section className="partnerships section" id="parcerias">
        <div className="partnership-image photo-slot" aria-label="Espaço reservado para foto de parceria"><Handshake size={28} strokeWidth={1.25} /><span>ESPAÇO PARA FOTO<br />DE PARCERIA</span></div>
        <div className="partnership-copy"><div className="section-label">04 / PARCERIAS</div><h2>VAMOS CRIAR<br /><span>JUNTOS?</span></h2><p>Estou aberto a marcas e projetos que compartilham os valores do judô: disciplina, respeito, evolução e comunidade.</p><a className="button button-dark" href="mailto:contato@pedrogozetto.com">Falar sobre uma parceria <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="contact" id="contato">
        <p className="eyebrow"><span /> VAMOS NOS CONECTAR</p><h2>UM IPPON COMEÇA<br />COM O <em>PRIMEIRO PASSO.</em></h2><a className="contact-email" href="mailto:contato@pedrogozetto.com">contato@pedrogozetto.com <ArrowUpRight size={24} /></a>
        <div className="contact-bottom"><a href="#inicio" className="brand inverted"><span>PG</span><small>JUDÔ</small></a><div><MapPin size={15} /> Brasil</div><a href="https://instagram.com" target="_blank" rel="noreferrer"><AtSign size={16} /> Instagram</a><a href="#inicio" className="back-top">Voltar ao topo <ChevronDown size={16} /></a></div>
      </section>
    </main>
  );
}
