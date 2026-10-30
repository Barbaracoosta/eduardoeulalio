import './Differentials.css'

const items = [
  ['01', 'Atendimento próximo', 'Escuta atenta e comunicação clara em cada etapa do atendimento.'],
  ['02', 'Análise individualizada', 'Compreensão das particularidades antes da definição de caminhos jurídicos.'],
  ['03', 'Atuação técnica', 'Estratégias fundamentadas e condução responsável de cada demanda.'],
  ['04', 'Acompanhamento', 'Informações e orientação ao cliente durante os procedimentos.'],
]

export default function Differentials() {
  return (
    <section className="section differentials-section" id="diferenciais">
      <div className="container differentials-layout">
        <div><span className="section-kicker">Nosso compromisso</span><h2 className="section-title">Clareza e responsabilidade em cada etapa.</h2><p className="section-copy">O escritório busca construir uma relação de confiança por meio da proximidade com o cliente, da transparência nas orientações e do cuidado técnico com cada demanda.</p></div>
        <div className="differentials-list">
          {items.map(([n, title, desc]) => <div className="differential-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}
        </div>
      </div>
    </section>
  )
}
