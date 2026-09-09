'use client';

import { useEffect, useRef, useState } from 'react';
import { coupleData } from '@/data/couple-data';
import { WaxSeal } from '@/components/wax-seal';

function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={`brand${compact ? ' brand--compact' : ''}`}><strong>QUIROZ</strong><span>PAREJAS</span></span>;
}

function WineLines() {
  return <div className="wine-lines" aria-hidden="true"><i className="wine-line wine-line--one" /><i className="wine-line wine-line--two" /><i className="wine-line wine-line--three" /><i className="wine-line wine-line--curve" /></div>;
}

function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasAudio = Boolean(coupleData.audioSrc);
  async function toggleAudio() {
    if (!audioRef.current || !hasAudio) return;
    if (audioRef.current.paused) { await audioRef.current.play(); setPlaying(true); }
    else { audioRef.current.pause(); setPlaying(false); }
  }
  if (!hasAudio) return null;
  return <div className="music-wrap">
    {hasAudio ? <audio ref={audioRef} src={coupleData.audioSrc ?? undefined} loop /> : null}
    <button className="music-control" type="button" onClick={toggleAudio} disabled={!hasAudio}
      title={hasAudio ? (playing ? 'Silenciar música' : 'Activar música') : 'Audio preparado: añade el archivo en la configuración'}
      aria-label={hasAudio ? (playing ? 'Silenciar música' : 'Activar música') : 'Música no disponible en esta demostración'}>
      <span aria-hidden="true">♪</span>{hasAudio ? (playing ? 'Silenciar' : 'Música') : 'Sin audio'}
    </button>
  </div>;
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    if (!('IntersectionObserver' in window)) { nodes.forEach((node) => node.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [opened]);

  function discoverStory() {
    setEntered(true);
    requestAnimationFrame(() => document.querySelector('#nuestra-historia')?.scrollIntoView({ behavior: 'smooth' }));
  }

  function openExperience() {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setEntered(false);
    setOpened(true);
  }

  return <main className={`experience${opened ? ' experience--opened' : ''}${entered ? ' experience--entered' : ''}`}>
    <MusicControl />
    <section className="cover" aria-labelledby="cover-title">
      <img className="cover__reference" src="/assets/images/cover/quiroz-parejas-entry.jpeg" alt="" aria-hidden="true" fetchPriority="high" />
      <div className="cover__focus" aria-hidden="true" />
      <h1 className="sr-only" id="cover-title">{coupleData.cover.title}</h1>
      <div className="gift-stage">
        <button className="open-button open-button--scene" type="button" onClick={openExperience} aria-label="Abrir experiencia QUIROZ Parejas">
          <span>Abrir</span><span aria-hidden="true">→</span>
        </button>
      </div>
      <article className="letter" aria-hidden={!opened} aria-label="Carta personal">
        <Brand compact /><p className="letter__for">Para ti</p>
        <div className="letter__body">{coupleData.letter.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="letter__signature">Te elijo, siempre.</p><WaxSeal small />
        <button className="text-link" type="button" onClick={discoverStory}>Descubrir nuestra historia <span aria-hidden="true">→</span></button>
      </article>
      <div className="cover__scroll" aria-hidden="true">Desliza para continuar <span>↓</span></div>
    </section>

    <div className="journey">
      <section className="story" id="nuestra-historia" aria-labelledby="story-title">
        <WineLines />
        <div className={`story__photo reveal-mask${opened ? ' is-visible' : ''}`}><img src={coupleData.story.image} alt={coupleData.story.alt} width="900" height="1350" /></div>
        <div className="story__shade" aria-hidden="true" />
        <div className="story__content" data-reveal><span className="section-kicker">03 · Primera fotografía</span><h2 id="story-title">{coupleData.story.title}</h2><span className="mini-rule" aria-hidden="true" /><p>{coupleData.story.lead}</p>
          <div className="couple-names"><strong>{coupleData.person1} <span>&amp;</span> {coupleData.person2}</strong><small>{coupleData.date}</small></div>
        </div>
      </section>

      <section className="memories" aria-labelledby="memories-title">
        <WineLines />
        <header className="memories__intro" data-reveal><span className="section-kicker">04 · Los recuerdos</span><h2 id="memories-title">Una historia contada <em>en capítulos</em></h2><p>Momentos que merecen quedarse.</p></header>
        <nav className="chapter-index" aria-label="Índice de capítulos" data-reveal>
          {coupleData.chapters.map((chapter) => <a href={`#chapter-${chapter.number}`} key={chapter.number}><span>{chapter.number}</span>{chapter.title}</a>)}
        </nav>
        {coupleData.chapters.map((chapter, index) => <article className={`chapter chapter--${index + 1}`} id={`chapter-${chapter.number}`} key={chapter.number} aria-labelledby={`chapter-title-${chapter.number}`}>
          <div className="chapter__number" aria-hidden="true">{chapter.number}</div>
          <div className="chapter__visuals" data-reveal>
            <figure className="chapter__photo chapter__photo--main"><img src={chapter.images[0].src} alt={chapter.images[0].alt} width="900" height="1350" loading="lazy" style={{ objectPosition: chapter.images[0].position }} /></figure>
            <figure className="chapter__photo chapter__photo--detail"><img src={chapter.images[1].src} alt={chapter.images[1].alt} width="900" height="1350" loading="lazy" style={{ objectPosition: chapter.images[1].position }} /></figure>
          </div>
          <div className="chapter__copy" data-reveal><span className="section-kicker">Capítulo {chapter.number}</span><h3 id={`chapter-title-${chapter.number}`}>{chapter.title}</h3><blockquote>{chapter.lead}</blockquote>
            <div className="chapter__body">{chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {index < coupleData.chapters.length - 1 ? <a className="text-link" href={`#chapter-${coupleData.chapters[index + 1].number}`}>Siguiente capítulo <span aria-hidden="true">→</span></a> : <a className="text-link" href="#el-final">Llegar al final <span aria-hidden="true">→</span></a>}
          </div>
        </article>)}
      </section>

      <section className="finale" id="el-final" aria-labelledby="final-title">
        <WineLines /><img className="finale__image" src={coupleData.final.image} alt={coupleData.final.alt} width="900" height="1350" loading="lazy" /><div className="finale__veil" aria-hidden="true" />
        <div className="finale__content" data-reveal><span className="section-kicker">05 · El final</span><h2 id="final-title">{coupleData.final.closing}</h2><span className="mini-rule" aria-hidden="true" />
          <div className="finale__body">{coupleData.final.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="finale__signature">{coupleData.final.signature}</p><WaxSeal /><Brand /><p className="finale__tagline">Historias que merecen quedarse.</p>
        </div>
      </section>
    </div>
  </main>;
}
