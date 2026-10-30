import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="footer-brand" href="#inicio"><img src="/brand-mark.svg" alt="" /> <span>EDUARDO EULÁLIO <small>ADVOCACIA</small></span></a>
        <p>Proximidade no atendimento.<br />Rigor na estratégia.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/eduardoeulalio.adv/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:eduardoeulalio.adv@gmail.com">E-mail</a>
          <a href="https://wa.me/5581995438654" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>Eduardo Eulálio Advocacia · OAB/PE 50.346</span><span>© {new Date().getFullYear()} Todos os direitos reservados.</span></div>
    </footer>
  )
}
