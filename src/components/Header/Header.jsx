import { useState } from 'react'
import './Header.css'

const links = [
  ['O escritório', '#sobre'],
  ['Áreas de atuação', '#atuacao'],
  ['Diferenciais', '#diferenciais'],
  ['Unidades', '#unidades'],
  ['Dúvidas', '#duvidas'],
  ['Contato', '#contato'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#inicio" aria-label="Eduardo Eulálio Advocacia - início">
          <img className="brand-mark" src="/brand-mark.svg" alt="" />
          <span className="brand-name">EDUARDO EULÁLIO <small>ADVOCACIA</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="header-cta" href="https://wa.me/5581995438654" target="_blank" rel="noreferrer">Falar com o escritório</a>
        </nav>
      </div>
    </header>
  )
}
