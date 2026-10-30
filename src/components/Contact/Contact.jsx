import './Contact.css'

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const subject = data.get('subject')
    const message = `Olá! Meu nome é ${name}. Gostaria de conversar sobre: ${subject}.`
    window.open(`https://wa.me/5581995438654?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="section-kicker">Contato</span>
          <h2 className="section-title">Vamos conversar sobre sua necessidade jurídica?</h2>
          <p>Entre em contato para apresentar sua situação e receber orientações sobre os próximos passos.</p>
          <a className="contact-phone" href="https://wa.me/5581995438654" target="_blank" rel="noreferrer">(81) 99543-8654 <span>↗</span></a>
          <a className="contact-email" href="mailto:eduardoeulalio.adv@gmail.com">eduardoeulalio.adv@gmail.com</a>
          <p className="contact-location">Atendimento em Paulista/PE e Região Metropolitana do Recife, com possibilidade de atendimento online em todo o Brasil.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Seu nome<input name="name" required placeholder="Como podemos chamar você?" /></label>
          <label>Assunto<textarea name="subject" rows="4" required placeholder="Conte brevemente como podemos ajudar." /></label>
          <button className="button" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
          <small>Ao continuar, você será direcionado ao WhatsApp do escritório.</small>
        </form>
      </div>
    </section>
  )
}
