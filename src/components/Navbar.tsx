import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/soflogo.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Mission', href: '/#mission' },
  { label: 'Investments', href: '/#investments' },
  { label: 'Locations', href: '/#locations' },
  { label: 'Leadership', href: '/chairman' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Shyam Overseas Fund" className="navbar__logo" />
          <span className="navbar__name">
            <span className="navbar__name-top">Shyam Overseas</span>
            <span className="navbar__name-bottom">Fund</span>
          </span>
        </Link>

        <button
          className={`navbar__toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) =>
            link.href.startsWith('/chairman') ? (
              <li key={link.label}>
                <Link to={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  )
}
