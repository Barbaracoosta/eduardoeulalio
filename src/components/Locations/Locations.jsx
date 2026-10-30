const units = [
  {
    name: 'Unidade Centro',
    neighborhood: 'Centro',
    address: 'Rua Francisco Santiago da Costa, 213, sala 12',
    building: 'Galeria 213',
    postalCode: 'CEP 53401-315',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Santiago+da+Costa+213+Paulista+PE',
  },
  {
    name: 'Unidade Janga',
    neighborhood: 'Janga',
    address: 'Rua Doutor Luís Inácio de Andrade Lima, 1055, sala 09',
    building: 'Galeria Tiana Albuquerque',
    postalCode: 'CEP 53435-455',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Luis+Inacio+de+Andrade+Lima+1055+Paulista+PE',
  },
]

function Locations() {
  return (
    <section className="locations section" id="unidades">
      <div className="container">
        <div className="locations__intro">
          <span className="section-kicker">ONDE ESTAMOS</span>
          <h2 className="section-title">Duas unidades. O mesmo compromisso.</h2>
          <p className="section-copy">
            Estamos em Paulista/PE, com espaços preparados para receber você
            com atenção, discrição e acolhimento.
          </p>
        </div>

        <div className="locations__grid">
          {units.map((unit, index) => (
            <article className="location-card" key={unit.name}>
              <div className="location-card__top">
                <span className="location-card__index">0{index + 1}</span>
                <span className="location-card__label">EDUARDO EULÁLIO ADVOCACIA</span>
              </div>
              <div className="location-card__content">
                <span className="location-card__neighborhood">{unit.neighborhood} · PAULISTA/PE</span>
                <h3>{unit.name}</h3>
                <address>
                  <span>{unit.address}</span>
                  <span>{unit.building}</span>
                  <span>{unit.postalCode}</span>
                </address>
              </div>
              <a className="location-card__link" href={unit.maps} target="_blank" rel="noreferrer">
                Como chegar <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
