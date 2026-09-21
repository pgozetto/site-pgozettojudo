'use client';

import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BookOpenCheck,
  ChevronUp,
  CirclePlay,
  Medal,
  Menu,
  Camera,
  Music2,
  Package,
  Sparkles,
  SquarePlay,
  X,
} from 'lucide-react';

const navItems = [
  ['Sobre', '#sobre'],
  ['Autoridade', '#autoridade'],
  ['Projetos', '#projetos'],
  ['Parcerias', '#parcerias'],
];

const contentProjects = [
  { icon: CirclePlay, title: 'Conteúdo para atletas', text: 'Técnica, rotina, competição e bastidores para quem vive o judô de verdade.' },
  { icon: Package, title: 'Materiais em breve', text: 'Guias e produtos pensados para acelerar sua evolução dentro e fora do tatame.' },
  { icon: Sparkles, title: 'Projetos especiais', text: 'Ações e ideias para fortalecer a nova geração do judô brasileiro.' },
];

const medals = [
  { title: 'Terceiro Lugar Inter Regional', detail: 'Ano: 2023', emoji: '🥉' },
  { title: 'Segundo Lugar Inter Regional', detail: 'Ano: 2024', emoji: '🥈' },
];

const certificates = [
  { title: 'Faixa Marrom', detail: 'Certificado de graduação · 2025', image: '/certificado-faixa-marrom.png' },
  { title: 'Curso Shotyugueiko', detail: 'São Carlos · 2026', image: '/certificado-shotyugueiko.png' },
];

const socialNetworks = [
  { label: 'Instagram', handle: '@pgozettojudo', href: 'https://www.instagram.com/pgozettojudo/', icon: Camera },
  { label: 'TikTok', handle: '@pgozettojudo', href: 'https://www.tiktok.com/@pgozettojudo', icon: Music2 },
  { label: 'YouTube', handle: '@pgozettojudo', href: 'https://www.youtube.com/@pgozettojudo', icon: SquarePlay },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<(typeof certificates)[number] | null>(null);
  const [certificateClosing, setCertificateClosing] = useState(false);

  useEffect(() => {
    const updateParallax = () => {
      const scroll = window.scrollY;
      document.documentElement.style.setProperty('--hero-shift', `${Math.max(scroll * -0.05, -55)}px`);
      document.documentElement.style.setProperty('--orb-shift', `${Math.min(scroll * 0.035, 55)}px`);
      document.documentElement.style.setProperty('--image-shift', `${Math.max(scroll * -0.025, -28)}px`);
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const depth = Number(element.dataset.parallax ?? '0.04');
        const offset = Math.max(-70, Math.min(70, (window.innerHeight / 2 - (rect.top + rect.height / 2)) * depth));
        element.style.setProperty('--parallax-y', `${Math.round(offset)}px`);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateParallax);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const openCertificate = (certificate: (typeof certificates)[number]) => {
    setCertificateClosing(false);
    setActiveCertificate(certificate);
  };
  const closeCertificate = () => {
    setCertificateClosing(true);
    window.setTimeout(() => {
      setActiveCertificate(null);
      setCertificateClosing(false);
    }, 240);
  };

  useEffect(() => {
    if (!activeCertificate) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeCertificate();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeCertificate]);

  return (
    <main>
      <header className="site-header">
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero parallax-section" id="inicio">
        <div className="hero-grid-lines parallax-layer" data-parallax="0.08" aria-hidden="true" />
        <div className="hero-orbit orbit-one parallax-layer" data-parallax="0.06" aria-hidden="true" /><div className="hero-orbit orbit-two parallax-layer" data-parallax="-0.04" aria-hidden="true" />
        <div className="hero-content reveal is-visible">
          <h1 className="hero-welcome"><span>Seja Bem<br />Vindo! </span><strong>@pgozettojudo</strong><span><br />por aqui!</span></h1>
          <p className="hero-text">Conteúdo, rotina e a realidade de quem vive o judô dentro e fora do tatame.</p>
          <div className="hero-social-links" aria-label="Redes sociais de Pedro Gozetto">{socialNetworks.map(({ label, handle, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={`${label}: ${handle}`}><Icon size={18} /><span>{handle}</span></a>)}</div>
        </div>
        <div className="hero-visual reveal is-visible parallax-layer" data-parallax="0.035">
          <div className="image-glow" aria-hidden="true" />
          <div className="hero-photo-frame"><img src="/img1.jpg" alt="Pedro Gozetto ajustando a faixa de judô" /></div>
        </div>
      </section>

      <section className="about section parallax-section" id="sobre">
        <div className="section-texture parallax-layer" data-parallax="0.05" aria-hidden="true" />
        <div className="judo-glyph glyph-about parallax-layer" data-parallax="-0.04" aria-hidden="true">柔道</div>
        <div className="section-photo-card reveal"><img src="/pedro-em-competicao.png" alt="Pedro Gozetto em competição de judô" /><span>MINHA JORNADA</span></div>
        <div className="about-copy reveal">
          <p className="eyebrow"><span /> 01 / QUEM SOU EU</p>
          <h2>O TATAME É ONDE<br /><em>EU ME ENCONTRO.</em></h2>
          <p>Meu objetivo é mostrar o judô de um jeito real: a técnica, a rotina, os desafios e tudo que o esporte ensina para fora do tatame.</p>
          <div className="mini-stats"><div><strong>SUB-18</strong><span>atleta em evolução</span></div><div><strong>JUDÔ</strong><span>minha essência</span></div><div><strong>CRIAR</strong><span>conteúdo com verdade</span></div></div>
        </div>
      </section>

      <section className="authority section parallax-section" id="autoridade">
        <div className="authority-orbit parallax-layer" data-parallax="0.07" aria-hidden="true" />
        <div className="authority-heading reveal"><p className="eyebrow"><span /> 02 / AUTORIDADE</p><h2>CONQUISTAS QUE<br /><em>CONTAM MINHA HISTÓRIA.</em></h2><p>Um espaço para registrar cada medalha, resultado e certificado que constrói minha trajetória no judô.</p></div>
        <div className="authority-grid">
          <article className="medal-panel reveal"><div className="panel-top"><Medal size={23} /><span>MEDALHAS E CONQUISTAS</span></div>{medals.map(({ title, detail, emoji }, index) => <div className="medal-row" key={title}><b>0{index + 1}</b><div><strong>{emoji} {title}</strong><span>{detail}</span></div><span className="medal-emoji" aria-hidden="true">{emoji}</span></div>)}</article>
          <article className="certificate-panel reveal"><div className="panel-top"><BookOpenCheck size={23} /><span>CERTIFICADOS</span></div><div className="certificate-list">{certificates.map((certificate) => <button className="certificate-card certificate-document" type="button" key={certificate.title} onClick={() => openCertificate(certificate)} aria-label={`Ampliar certificado de ${certificate.title}`}><div className="certificate-copy"><BookOpenCheck size={21} /><strong>{certificate.title}</strong><span>{certificate.detail}</span><small>CLIQUE PARA AMPLIAR</small></div><img src={certificate.image} alt={`Certificado de ${certificate.title} de Pedro Gozetto`} /></button>)}</div></article>
        </div>
      </section>

      <section className="projects section parallax-section" id="projetos">
        <div className="section-texture parallax-layer" data-parallax="-0.05" aria-hidden="true" /><div className="judo-glyph glyph-projects parallax-layer" data-parallax="0.04" aria-hidden="true">柔道</div>
        <div className="projects-heading reveal"><p className="eyebrow"><span /> 03 / O QUE ESTOU CRIANDO</p><h2>PROJETOS COM<br /><em>PROPÓSITO.</em></h2></div>
        <div className="project-grid">{contentProjects.map(({ icon: Icon, title, text }, index) => <article className="project-card reveal" key={title}><div className="project-icon"><Icon size={22} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contato" aria-label={`Saiba mais sobre ${title}`}><ArrowUpRight size={18} /></a></article>)}</div>
      </section>

      <section className="partnerships section parallax-section" id="parcerias">
        <div className="section-texture parallax-layer" data-parallax="0.05" aria-hidden="true" />
        <div className="partnership-image reveal"><img src="/img3.jpg" alt="Pedro Gozetto em uma atividade de judô com a comunidade" /></div>
        <div className="partnership-copy reveal"><p className="eyebrow"><span /> 04 / PARCERIAS</p><h2>VAMOS CRIAR<br /><em>JUNTOS?</em></h2><p>Estou aberto a marcas e projetos que compartilham os valores do judô: disciplina, respeito, evolução e comunidade.</p><a className="button button-outline" href="mailto:pedro@gozetto.com.br">Falar sobre uma parceria <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="contact parallax-section" id="contato">
        <div className="contact-orb parallax-layer" data-parallax="0.07" aria-hidden="true" /><div className="judo-glyph glyph-contact parallax-layer" data-parallax="-0.04" aria-hidden="true">柔道</div>
        <div className="contact-content reveal"><p className="eyebrow"><span /> VAMOS NOS CONECTAR</p><h2>O PRÓXIMO PASSO<br />COMEÇA <em>AGORA.</em></h2><a className="contact-email" href="mailto:pedro@gozetto.com.br">pedro@gozetto.com.br <ArrowUpRight size={24} /></a></div>
        <div className="contact-bottom"><div className="footer-social-links">{socialNetworks.map(({ label, handle, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={17} /><span>{handle}</span></a>)}</div><a href="#inicio" className="back-top">Voltar ao topo <ChevronUp size={16} /></a></div>
      </section>

      {activeCertificate && <div className={certificateClosing ? 'certificate-modal is-closing' : 'certificate-modal'} role="dialog" aria-modal="true" aria-label={`Visualização ampliada: ${activeCertificate.title}`} onClick={(event) => event.currentTarget === event.target && closeCertificate()}><div className="certificate-modal-card"><button className="certificate-close" type="button" onClick={closeCertificate} aria-label="Fechar certificado"><X size={22} /></button><div className="certificate-modal-title"><BookOpenCheck size={19} /><span>{activeCertificate.title}</span></div><img src={activeCertificate.image} alt={`Visualização ampliada do certificado de ${activeCertificate.title} de Pedro Gozetto`} /></div></div>}
    </main>
  );
}
