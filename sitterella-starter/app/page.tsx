import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-star">✳</span> PICCOLI INCONTRI, GRANDI SORRISI</p>
            <h1>La babysitter giusta?<br/><span>Ci pensa Sitterella!</span></h1>
            <p className="hero-lead">Un posto speciale dove famiglie e babysitter possono incontrarsi, conoscersi e trovare la soluzione giusta, con serenità.</p>
            <form action="/trova-babysitter" method="get" className="search-box">
              <label htmlFor="city" className="sr-only">Città in cui cerchi una babysitter</label>
              <span className="pin" aria-hidden="true">⌖</span>
              <input id="city" name="citta" placeholder="Dove cerchi una babysitter?" autoComplete="address-level2" />
              <button className="button button-primary" type="submit">Cerca <span aria-hidden="true">→</span></button>
            </form>
            <p className="microcopy">🌷 Cerchi lavoro? <Link href="/trova-lavoro">Scopri gli annunci per babysitter →</Link></p>
          </div>
          <div className="hero-art" aria-label="Illustrazione stilizzata con casetta, cuore e fiori" role="img">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="art-star star-one">✦</div><div className="art-star star-two">✳</div><div className="art-star star-three">✦</div>
            <div className="house">
              <div className="roof"/><div className="house-body"><div className="house-window">♡</div><div className="door"/></div>
            </div>
            <div className="floating-card card-top"><span className="card-emoji">💜</span><div><strong>Più vicini</strong><small>con un sorriso</small></div></div>
            <div className="floating-card card-bottom"><span className="card-emoji">🌼</span><div><strong>Incontri felici</strong><small>per ogni famiglia</small></div></div>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true"/>
      </section>
      <section className="shell section" id="come-funziona">
        <p className="eyebrow centered">SEMPLICE COME UN SORRISO</p>
        <h2 className="section-title">Come funziona <span>Sitterella?</span></h2>
        <p className="section-subtitle">Pochi passi per trovare nuove opportunità e persone su cui contare.</p>
        <div className="steps">
          <article className="step"><span className="step-number">01</span><span className="step-icon icon-lilac">☺</span><h3>Crea il tuo profilo</h3><p>Presentati come genitore o babysitter e racconta di cosa hai bisogno.</p></article>
          <article className="step"><span className="step-number">02</span><span className="step-icon icon-pink">⌕</span><h3>Trova chi fa per te</h3><p>Esplora i profili o gli annunci, filtrando per città e preferenze.</p></article>
          <article className="step"><span className="step-number">03</span><span className="step-icon icon-mint">♡</span><h3>Conoscetevi</h3><p>In futuro potrete candidarvi e parlare in chat prima di accordarvi.</p></article>
        </div>
      </section>
      <section className="shell section audience">
        <div className="audience-card parent-card"><span className="card-sticker">PER LE FAMIGLIE</span><div className="audience-icon">☀</div><h2>Cerchi una mano<br/>speciale?</h2><p>Scopri chi può aiutarti a prenderti cura dei tuoi piccoli.</p><Link className="button button-dark" href="/trova-babysitter">Trova una babysitter →</Link></div>
        <div className="audience-card sitter-card"><span className="card-sticker">PER LE BABYSITTER</span><div className="audience-icon">✿</div><h2>Hai una passione<br/>per i bambini?</h2><p>Fatti conoscere e scopri nuove opportunità vicino a te.</p><Link className="button button-dark" href="/trova-lavoro">Trova lavoro →</Link></div>
      </section>
      <section className="safety-band"><div className="shell safety-row"><span className="safety-flower">✽</span><div><h2>La fiducia viene prima di tutto.</h2><p>Stiamo progettando controlli dei profili, segnalazioni e protezioni dei dati prima dell'apertura al pubblico.</p></div><Link className="button button-outline" href="/come-funziona">Il nostro progetto →</Link></div></section>
      <section className="shell section bottom-cta"><span className="bottom-heart">♡</span><h2>Pronti a far nascere qualcosa di bello?</h2><p>Sitterella è in costruzione. Questa è la prima anteprima del sito.</p><Link className="button button-primary" href="/registrati">Esplora la registrazione →</Link></section>
    </>
  );
}
