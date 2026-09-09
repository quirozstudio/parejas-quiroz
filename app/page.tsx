'use client';

import { useEffect, useState } from 'react';
import { coupleData, type CoupleChapter, type MemoryPhoto } from '@/data/couple-data';
import { WaxSeal } from '@/components/wax-seal';

function Brand() { return <span className="brand"><strong>QUIROZ</strong><small>PAREJAS</small></span>; }

export default function Home() {
  const [stage, setStage] = useState<'cover' | 'letter' | 'index' | 'chapter' | 'final'>('cover');
  const [chapter, setChapter] = useState(0);
  const [lightbox, setLightbox] = useState<MemoryPhoto | null>(null);
  const current = coupleData.chapters[chapter];
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(null); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [stage, chapter]);
  function openChapter(index: number) { setChapter(index); setStage(index === coupleData.chapters.length - 1 ? 'final' : 'chapter'); }
  function next() { if (chapter >= coupleData.chapters.length - 2) setStage('final'); else { setChapter(chapter + 1); setStage('chapter'); } }
  function previous() { if (chapter <= 0) setStage('index'); else { setChapter(chapter - 1); setStage('chapter'); } }

  if (stage === 'cover') return <main className="experience cover-screen"><img className="cover-reference" src="/assets/images/cover/quiroz-parejas-entry.jpeg" alt="" aria-hidden="true" /><button className="cover-open" onClick={() => setStage('letter')} aria-label="Abrir el regalo de aniversario">Abrir <span>→</span></button></main>;
  if (stage === 'letter') return <main className="experience letter-screen"><Brand /><p className="letter-for">Para ti, Sofía</p><div className="letter-copy">{coupleData.letter.map((line) => <p key={line}>{line}</p>)}</div><p className="signature">Damián</p><WaxSeal small /><button className="primary-button" onClick={() => setStage('index')}>Comenzar nuestra historia <span>→</span></button></main>;
  if (stage === 'index') return <main className="experience index-screen"><header><Brand /><p>Un año de nosotros</p></header><div className="index-heading"><span>01 — 10</span><h1>Nuestra historia</h1><p>Diez recuerdos para volver a nosotros.</p></div><nav className="timeline" aria-label="Índice de capítulos">{coupleData.chapters.map((item, index) => <button key={item.number} onClick={() => openChapter(index)}><span>{item.number}</span><strong>{item.title}</strong><i>↗</i></button>)}</nav></main>;
  const isFinal = stage === 'final';
  return <main className={`experience chapter-screen chapter-${current.style}`}>
    <header className="chapter-top"><button className="back-button" onClick={() => setStage('index')} aria-label="Volver al índice">← <span>Índice</span></button><Brand /><span>{current.number} / 10</span></header>
    {isFinal ? <section className="final-message"><span className="chapter-label">10 — Cierre</span><h1>Un año de nosotros.</h1>{current.body.slice(1).map((line) => <p key={line}>{line}</p>)}<div className="final-cta"><strong>Sofía &amp; Damián</strong><button className="primary-button" onClick={() => setStage('index')}>Volver a nuestros recuerdos</button></div></section> : <section className="chapter-layout"><div className="chapter-visual">{current.images.map((image) => <button className="memory-photo" key={image.src} onClick={() => setLightbox(image)} aria-label={`Ampliar ${image.alt}`}><img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} /></button>)}</div><article className="chapter-copy"><span className="chapter-label">Capítulo {current.number}</span><h1>{current.title}</h1><div className="body-copy">{current.body.map((line) => <p key={line}>{line}</p>)}</div></article></section>}
    <nav className="chapter-nav" aria-label="Navegación de recuerdos"><button onClick={previous}>← Anterior</button>{!isFinal && <button onClick={() => setStage('index')}>Índice</button>}{!isFinal && <button onClick={next}>Siguiente recuerdo →</button>}</nav>
    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fotografía ampliada" onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar fotografía">×</button><img src={lightbox.src} alt={lightbox.alt} onClick={(event) => event.stopPropagation()} /></div>}
  </main>;
}
