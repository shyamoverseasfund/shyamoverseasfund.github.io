import { Link } from 'react-router-dom'
import './Footer.css'

const SOCIALS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    path: 'M17 2.1v3.2h-2c-.6 0-1 .4-1 1v2h3l-.4 3h-2.6v8h-3.2v-8H7.8v-3h2.1v-2.2C9.9 4.1 11.2 2 14.1 2c.8 0 1.6.1 2.9.1z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zm5.2-8.4a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zm3.2 1.1a6.4 6.4 0 0 0-1.7-4.5A6.4 6.4 0 0 0 16.8 2.2C15.1 2 8.9 2 7.2 2.2A6.4 6.4 0 0 0 2.2 7.2C2 8.9 2 15.1 2.2 16.8a6.4 6.4 0 0 0 1.7 4.5 6.4 6.4 0 0 0 4.5 1.7c1.7.2 7.9.2 9.6 0a6.4 6.4 0 0 0 4.5-1.7 6.4 6.4 0 0 0 1.7-4.5c.2-1.7.2-7.9 0-9.6zm-2 11.6a3.7 3.7 0 0 1-2.1 2.1c-1.5.6-5.1.5-6.8.5s-5.3.1-6.8-.5a3.7 3.7 0 0 1-2.1-2.1c-.6-1.5-.5-5.1-.5-6.8s-.1-5.3.5-6.8a3.7 3.7 0 0 1 2.1-2.1c1.5-.6 5.1-.5 6.8-.5s5.3-.1 6.8.5a3.7 3.7 0 0 1 2.1 2.1c.6 1.5.5 5.1.5 6.8s.1 5.3-.5 6.8z',
  },
  {
    name: 'X',
    href: 'https://x.com',
    path: 'M17.53 3H21l-7.19 8.19L22 21h-6.56l-5.19-6.19L3 21H0l7.81-8.89L2 3h6.56l4.81 5.81L17.53 3zm-2.19 15h2.19l-5.19-6.19L4.47 18H6.66l5.19-6.19L15.34 18z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z',
  },
  {
    name: 'Threads',
    href: 'https://threads.net',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2.5-7.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-7c-3.31 0-6 2.69-6 6 0 2.21 1.2 4.15 3 5.19V17h2v-1.81c.63-.13 1.22-.38 1.74-.74l1.45 1.45c-1.02.63-2.22 1-3.19 1-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 .97-.37 2.17-1 3.19l-1.45-1.45c.36-.52.61-1.11.74-1.74H17v-2h-1.81c-1.04-1.8-2.98-3-5.19-3z',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    path: 'M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.07 6 12 6 12 6s-6.07 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94C2 9.81 2 12 2 12s0 2.19.2 3.999a2.75 2.75 0 0 0 1.94 1.94C5.93 18 12 18 12 18s6.07 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94C22 14.19 22 12 22 12s0-2.19-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z',
  },
]

const LINK_COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Mission', href: '/#mission' },
      { label: 'Leadership', href: '/chairman' },
    ],
  },
  {
    heading: 'Focus',
    links: [
      { label: 'Investments', href: '/#investments' },
      { label: 'Locations', href: '/#locations' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__wordmark">
            Shyam Overseas <strong>Fund</strong>
          </span>
          <p className="footer__tag">Global Multi-Asset Fund Management</p>
        </div>

        <div className="footer__links">
          {LINK_COLUMNS.map((col) => (
            <div className="footer__col" key={col.heading}>
              <span className="footer__col-heading">{col.heading}</span>
              <ul>
                {col.links.map((link) =>
                  link.href.startsWith('/chairman') ? (
                    <li key={link.label}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__contact">
          <span className="footer__col-heading">Contact</span>
          <a href="mailto:info@shyamoverseasfund.com">info@shyamoverseasfund.com</a>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="footer__icon">
                <svg viewBox="0 0 24 24">
                  <path d={s.path} fill="currentColor" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Shyam Overseas Fund. All rights reserved.</p>
          <p>India &middot; USA &middot; UK &middot; Dubai</p>
        </div>
      </div>
    </footer>
  )
}
