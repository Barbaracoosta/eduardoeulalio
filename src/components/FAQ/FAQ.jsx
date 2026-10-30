import './FAQ.css'

const questions = [
  ['O escritório atende apenas em Paulista/PE?', 'O escritório tem atuação em Paulista/PE e nos municípios da Região Metropolitana do Recife. Também atende clientes de todo o Brasil, inclusive online, conforme a natureza da demanda.'],
  ['É possível receber atendimento online?', 'Sim. O atendimento online pode ser realizado para clientes de todo o Brasil, observadas as características de cada demanda e as regras aplicáveis ao exercício da advocacia.'],
  ['Quais documentos preciso apresentar?', 'Os documentos necessários variam conforme o assunto. No primeiro contato, o escritório poderá orientar sobre as informações e os documentos pertinentes à análise inicial.'],
  ['O contato pelo WhatsApp garante a contratação?', 'Não. O primeiro contato serve para apresentar a necessidade e receber orientações iniciais. A contratação e a definição da estratégia dependem de análise individualizada.'],
]

export default function FAQ() {
  return (
    <section className="section faq-section" id="duvidas">
      <div className="container faq-layout">
        <div><span className="section-kicker">Perguntas frequentes</span><h2 className="section-title">Informação para dar o primeiro passo.</h2><p className="section-copy">Se sua dúvida não estiver aqui, entre em contato com o escritório.</p></div>
        <div className="faq-list">{questions.map(([q, a]) => <details key={q} className="faq-item"><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </div>
    </section>
  )
}
