import './About.css'

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="portrait-placeholder"><span>FOTOGRAFIA PROFISSIONAL</span><small>Imagem do advogado a inserir</small></div>
          <div className="oab-stamp">OAB/PE<br /><strong>50.346</strong></div>
        </div>
        <div className="about-text">
          <span className="section-kicker">O escritório</span>
          <h2 className="section-title">Uma advocacia próxima, técnica e comprometida.</h2>
          <p>Eduardo Eulálio Rodrigues Júnior, advogado inscrito na OAB/PE sob o nº 50.346, atua na orientação, consultoria e representação jurídica de pessoas físicas e jurídicas, desenvolvendo uma advocacia pautada pela análise individualizada, responsabilidade profissional e clareza na comunicação.</p>
          <p>Com atuação judicial e extrajudicial, o escritório atende em Paulista/PE, na Região Metropolitana do Recife e clientes de todo o Brasil, inclusive de forma online, conforme a natureza da demanda.</p>
          <p>O trabalho busca compreender as particularidades de cada caso e construir estratégias jurídicas fundamentadas, mantendo o cliente informado durante as diferentes etapas do atendimento.</p>
          <a className="text-link" href="#contato">Conheça as possibilidades de atendimento <span>→</span></a>
        </div>
      </div>
    </section>
  )
}
