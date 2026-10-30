import './PracticeAreas.css'

const areas = [
  { n: '01', title: 'Direito Criminal', desc: 'Defesa e acompanhamento em investigações, inquéritos, prisões em flagrante, audiências de custódia, ações penais e demais procedimentos criminais.' },
  { n: '02', title: 'Família e Sucessões', desc: 'Orientação em divórcio, união estável, guarda, convivência, alimentos, partilha de bens, inventários e planejamento sucessório.' },
  { n: '03', title: 'Direito Civil e do Consumidor', desc: 'Atuação em indenizações, contratos, cobranças e negativações indevidas, conflitos bancários, fraudes e relações de consumo.' },
  { n: '04', title: 'Direito Previdenciário', desc: 'Requerimentos, revisões e recursos relacionados a benefícios do INSS, aposentadorias, benefícios por incapacidade, pensão por morte e BPC/LOAS.' },
  { n: '05', title: 'Direito Trabalhista', desc: 'Orientação sobre vínculo empregatício, verbas rescisórias, horas extras, FGTS, adicionais, acidentes de trabalho e reclamações trabalhistas.' },
  { n: '06', title: 'Consultoria Jurídica', desc: 'Análise de documentos, elaboração e revisão de contratos, orientação preventiva, notificações, negociação e avaliação de riscos jurídicos.' },
]

export default function PracticeAreas() {
  return (
    <section className="section areas-section" id="atuacao">
      <div className="container">
        <div className="areas-heading">
          <div><span className="section-kicker">Áreas de atuação</span><h2 className="section-title">Soluções jurídicas para diferentes necessidades.</h2></div>
          <p className="section-copy">Cada situação exige uma análise própria. Conheça as áreas de atuação do escritório e entre em contato para compreender as possibilidades aplicáveis ao seu caso.</p>
        </div>
        <div className="areas-grid">
          {areas.map(area => (
            <article className="area-card" key={area.n}>
              <span className="area-number">{area.n}</span>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
              <a href="https://wa.me/5581995438654" target="_blank" rel="noreferrer" aria-label={`Consultar sobre ${area.title}`}>Conversar sobre esta área <span>↗</span></a>
            </article>
          ))}
        </div>
        <p className="areas-disclaimer">A medida jurídica adequada depende da análise individualizada dos fatos e documentos de cada situação.</p>
      </div>
    </section>
  )
}
