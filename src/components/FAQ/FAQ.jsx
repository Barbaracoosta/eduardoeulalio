import './FAQ.css'

const questions = [
  ['O escritório atende apenas em Paulista/PE?', 'O escritório tem atuação em Paulista/PE e nos municípios da Região Metropolitana do Recife. Também atende clientes de todo o Brasil, inclusive online, conforme a natureza da demanda.'],
  ['É possível receber atendimento online?', 'Sim. O atendimento online pode ser realizado para clientes de todo o Brasil, observadas as características de cada demanda e as regras aplicáveis ao exercício da advocacia.'],
  ['Quais documentos preciso apresentar?', 'Os documentos necessários variam conforme o assunto. No primeiro contato, o escritório poderá orientar sobre as informações e os documentos pertinentes à análise inicial.'],
  ['O contato pelo WhatsApp garante a contratação?', 'Não. O primeiro contato serve para apresentar a necessidade e receber orientações iniciais. A contratação e a definição da estratégia dependem de análise individualizada.'],
  ['Como funciona o primeiro atendimento?', 'No primeiro contato, você poderá apresentar brevemente sua necessidade. A partir dessas informações, o escritório poderá orientar sobre os próximos passos e indicar quais documentos são pertinentes para uma análise inicial.'],
  ['O escritório atende pessoas físicas e empresas?', 'Sim. O escritório atua na orientação, consultoria e representação jurídica de pessoas físicas e jurídicas, conforme a área e as características de cada demanda.'],
]

export default function FAQ() {
  return (
    <section className="section faq-section" id="duvidas">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="section-kicker">Perguntas frequentes</span>
          <h2 className="section-title">Informação para dar o primeiro passo.</h2>
        </div>
        <div className="faq-content">
          <div className="faq-list">
            {questions.map(([q, a]) => (
              <details key={q} className="faq-item">
                <summary>{q}<span aria-hidden="true">+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="faq-contact-note">Não encontrou sua dúvida? Entre em contato.</p>
        </div>
      </div>
    </section>
  )
}
