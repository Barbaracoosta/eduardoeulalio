import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-kicker">EDUARDO EULÁLIO ADVOCACIA</span>
        <h1>Atuação jurídica estratégica para <em>proteger seus direitos.</em></h1>
        <p>Orientação jurídica individualizada, atuação técnica e compromisso com a condução responsável de cada demanda.</p>
        <div className="hero-actions">
          <a className="button" href="https://wa.me/5581995438654" target="_blank" rel="noreferrer">Falar com o escritório</a>
          <a className="button button--outline" href="#atuacao">Conheça nossa atuação</a>
        </div>
        <div className="hero-footnote">PROXIMIDADE NO ATENDIMENTO. RIGOR NA ESTRATÉGIA.</div>
      </div>
      <div className="hero-number">OAB/PE 50.346</div>
    </section>
  )
}
