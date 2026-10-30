const units = [
  {
    name: 'Unidade Centro',
    address: 'Rua Francisco Santiago da Costa, 213, sala 12',
    complement: 'Galeria 213 · Centro',
    postalCode: 'CEP 53401-315',
    city: 'Paulista/PE',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Santiago+da+Costa+213+Paulista+PE',
  },
  {
    name: 'Unidade Janga',
    address: 'Rua Doutor Luís Inácio de Andrade Lima, 1055, sala 09',
    complement: 'Galeria Tiana Albuquerque · Janga',
    postalCode: 'CEP 53435-455',
    city: 'Paulista/PE',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Luis+Inacio+de+Andrade+Lima+1055+Paulista+PE',
  },
]

function Locations() {
  return (
    <section className="locations section" id="unidades">
      <div className="container">
        <div className="locations__heading">
          <span className="eyebrow">Onde estamos</span>
          <h2>Atendimento próximo e acessível.</h2>
          <p>O escritório atende em duas unidades no município de Paulista, em Pernambuco.</p>
        </div>

        <div className="locations__grid">
          {units.map((unit) => (
            <article className="location-card" key={unit.name}>
              <span className="location-card__number">EDUARDO EULÁLIO ADVOCACIA</span>
              <h3>{unit.name}</h3>
              <address>
                <span>{unit.address}</span>
                <span>{unit.complement}</span>
                <span>{unit.postalCode}</span>
                <span>{unit.city}</span>
              </address>
              <a href={unit.maps} target="_blank" rel="noreferrer">
                Ver localização <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
