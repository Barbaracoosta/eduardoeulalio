import './HowItWorks.css'

const steps = [
  ['01', 'Primeiro contato', 'Você apresenta brevemente sua necessidade pelo WhatsApp ou formulário.'],
  ['02', 'Análise inicial', 'O escritório verifica as informações e identifica quais documentos podem ser necessários.'],
  ['03', 'Orientação jurídica', 'Após compreender o caso, são explicadas as possibilidades e os próximos passos pertinentes.'],
]

export default function HowItWorks() {
  return (
    <section className="section process-section">
      <div className="container">
        <span className="section-kicker">Como funciona</span>
        <h2 className="section-title">Um caminho claro desde o primeiro contato.</h2>
        <div className="process-grid">{steps.map(([n, title, desc]) => <article className="process-card" key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        <p className="process-note">A contratação e a definição de qualquer estratégia dependem da análise individualizada da demanda.</p>
      </div>
    </section>
  )
}
