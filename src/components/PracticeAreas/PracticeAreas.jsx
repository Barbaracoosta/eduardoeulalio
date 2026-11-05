import './PracticeAreas.css'

const areas = [
  {
    n: '01',
    title: 'Direito Criminal',
    desc: 'Defesa e acompanhamento em investigações, procedimentos policiais e processos criminais, com análise cuidadosa de cada etapa.',
    examples: 'Inquéritos policiais, investigações, prisões em flagrante, audiências de custódia, pedidos de liberdade provisória, habeas corpus, medidas cautelares, ações penais, acompanhamento de processos criminais, crimes contra o patrimônio, questões relacionadas à violência doméstica e demais procedimentos criminais.',
  },
  {
    n: '02',
    title: 'Família e Sucessões',
    desc: 'Orientação jurídica para questões familiares, organização patrimonial e procedimentos relacionados à sucessão.',
    examples: 'Divórcio consensual ou litigioso, dissolução de união estável, guarda e regulamentação de convivência, pensão alimentícia, revisão e exoneração de alimentos, investigação e reconhecimento de paternidade, partilha de bens, inventário judicial e extrajudicial, arrolamento, testamento e planejamento sucessório.',
  },
  {
    n: '03',
    title: 'Direito Civil e do Consumidor',
    desc: 'Atuação em conflitos contratuais, relações de consumo, responsabilidade civil e questões envolvendo instituições financeiras.',
    examples: 'Ações de indenização por danos materiais e morais, responsabilidade civil, cobranças e negativações indevidas, problemas com contratos, rescisão contratual, obrigações de fazer, conflitos bancários, descontos não autorizados, fraudes, empréstimos e financiamentos, vícios e defeitos de produtos ou serviços e demais relações de consumo.',
  },
  {
    n: '04',
    title: 'Direito Previdenciário',
    desc: 'Análise e acompanhamento de requerimentos, revisões e demandas relacionadas aos benefícios previdenciários e assistenciais.',
    examples: 'Requerimento e acompanhamento de benefícios do INSS, aposentadoria por idade, por tempo de contribuição e especial, benefício por incapacidade temporária, aposentadoria por incapacidade permanente, auxílio-acidente, salário-maternidade, pensão por morte, BPC/LOAS, revisão de benefícios, recursos administrativos e ações judiciais previdenciárias.',
  },
  {
    n: '05',
    title: 'Direito Trabalhista',
    desc: 'Orientação sobre direitos e deveres nas relações de trabalho, tanto em questões preventivas quanto em conflitos.',
    examples: 'Análise das relações de trabalho, reconhecimento de vínculo empregatício, verbas rescisórias, horas extras, férias, 13º salário, FGTS, aviso-prévio, adicionais de insalubridade e periculosidade, estabilidade provisória, acidentes de trabalho, assédio moral, rescisão indireta, justa causa e defesa e acompanhamento de reclamações trabalhistas.',
  },
  {
    n: '06',
    title: 'Consultoria Jurídica',
    desc: 'Suporte jurídico preventivo para compreender riscos, organizar documentos e avaliar caminhos possíveis.',
    examples: 'Análise de documentos, elaboração e revisão de contratos, orientação preventiva, avaliação de riscos jurídicos, notificações extrajudiciais, negociação, mediação, composição de conflitos e definição de estratégias para evitar ou solucionar demandas judiciais.',
  },
]

export default function PracticeAreas() {
  return (
    <section className="section areas-section" id="atuacao">
      <div className="container">
        <div className="areas-heading">
          <div>
            <span className="section-kicker">Áreas de atuação</span>
            <h2 className="section-title">Atuação jurídica com atenção a cada detalhe.</h2>
          </div>
          <p className="section-copy">
            Conheça as principais demandas atendidas pelo escritório. Cada situação é
            avaliada individualmente, considerando seus fatos, documentos e contexto.
          </p>
        </div>

        <div className="areas-grid">
          {areas.map(area => (
            <article className="area-card" key={area.n}>
              <div className="area-card-top">
                <span className="area-number">{area.n}</span>
                <span className="area-rule" aria-hidden="true" />
              </div>
              <h3>{area.title}</h3>
              <p className="area-description">{area.desc}</p>
              <details className="area-details">
                <summary>Exemplos de demandas</summary>
                <p>{area.examples}</p>
              </details>
            </article>
          ))}
        </div>

        <p className="areas-disclaimer">
          A apresentação destas áreas é informativa. A contratação e a definição de
          eventuais medidas dependem de análise individualizada, não havendo garantia
          de resultado ou indicação prévia de que uma medida específica seja adequada.
        </p>
      </div>
    </section>
  )
}
