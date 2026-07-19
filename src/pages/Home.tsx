import { Link } from 'react-router-dom'
import {
  Briefcase,
  TrendingUp,
  Landmark,
  Repeat,
  Handshake,
  Building2,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

const INVESTMENTS = [
  { icon: Briefcase, title: 'Business Investments', desc: 'Direct capital into growth-stage and established businesses across sectors.' },
  { icon: TrendingUp, title: 'Stocks & Bonds', desc: 'Diversified equity and fixed-income portfolios built for long-term value.' },
  { icon: Landmark, title: 'Securities Markets', desc: 'Active participation across global public securities markets.' },
  { icon: Repeat, title: 'Forex Trading', desc: 'Currency market strategies calibrated to macroeconomic conditions.' },
  { icon: Handshake, title: 'Business Buy & Sell', desc: 'Acquisitions, divestitures, and structured business transactions.' },
  { icon: Building2, title: 'Real Estate', desc: 'Commercial and residential property investment across key markets.' },
]

const LOCATIONS = [
  { name: 'India', detail: 'Headquarters' },
  { name: 'USA', detail: 'Operations' },
  { name: 'UK', detail: 'Operations' },
  { name: 'Dubai', detail: 'Operations' },
]

const STATS = [
  { value: '04', label: 'Global Markets' },
  { value: '06', label: 'Investment Verticals' },
  { value: 'Multi-Asset', label: 'Investment Approach' },
]

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-label">
      <span className="eyebrow">
        <span className="eyebrow__index">{index}</span> {title}
      </span>
      <div className="section-label__rule" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="container hero__content">
          <span className="eyebrow">Global Multi-Asset Fund Management</span>
          <h1>
            Capital, deployed with <span className="hero__accent">discipline</span>.
          </h1>
          <p className="hero__tagline">
            Shyam Overseas Fund invests in businesses, markets, and industries that shape a better future —
            across India, the USA, the UK, and Dubai.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Contact Us <ArrowRight size={16} />
            </a>
            <a href="#about" className="btn btn--outline">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero__stats">
          <div className="container hero__stats-inner">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="container about">
            <SectionLabel index="01" title="Who We Are" />
            <div className="about__body">
              <h2>About Us</h2>
              <p className="about__text">
                Shyam Overseas Fund is a global multi-asset fund management firm investing in businesses, stocks,
                bonds, securities markets, forex, business acquisitions, and real estate. We operate across
                India, the USA, the UK, and Dubai — bringing disciplined capital allocation to every market we enter.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--dark" id="mission">
          <div className="container">
            <SectionLabel index="02" title="Our Purpose" />
            <div className="mission">
              <h2>
                We invest in industries that create a positive impact on people&rsquo;s lives.
              </h2>
              <p className="mission__text">
                Pairing rigorous financial discipline with a long-term view of the world we want to help build.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="investments">
          <div className="container">
            <SectionLabel index="03" title="Where We Invest" />
            <h2 className="section-title">Our Investment Areas</h2>
            <div className="investment-grid">
              {INVESTMENTS.map(({ icon: Icon, title, desc }, i) => (
                <div className="investment-card" key={title}>
                  <div className="investment-card__head">
                    <span className="investment-card__index">{String(i + 1).padStart(2, '0')}</span>
                    <Icon size={20} strokeWidth={1.6} className="investment-card__icon" />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--paper" id="locations">
          <div className="container">
            <SectionLabel index="04" title="Where We Operate" />
            <h2 className="section-title">Our Locations</h2>
            <div className="locations-table">
              {LOCATIONS.map((loc, i) => (
                <div className="locations-table__row" key={loc.name}>
                  <span className="locations-table__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="locations-table__name">{loc.name}</span>
                  <span className="locations-table__detail">{loc.detail}</span>
                  <ArrowUpRight size={18} strokeWidth={1.6} className="locations-table__arrow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="container">
            <SectionLabel index="05" title="Leadership" />
            <h2 className="section-title">Chairman &amp; CEO</h2>
            <Link to="/chairman" className="leader-card">
              <div className="leader-card__avatar">PS</div>
              <div className="leader-card__body">
                <h3>Priyanshu Sharma</h3>
                <p className="leader-card__title">Chairman &amp; CEO</p>
                <p className="leader-card__edu">
                  <GraduationCap size={15} strokeWidth={1.8} /> Bachelors, IIT Madras
                </p>
              </div>
              <span className="leader-card__cta">
                View Profile <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>

        <section className="section section--dark" id="contact">
          <div className="container contact">
            <SectionLabel index="06" title="Get In Touch" />
            <h2>Let&rsquo;s start a conversation.</h2>
            <a href="mailto:info@shyamoverseasfund.com" className="btn btn--primary contact__btn">
              info@shyamoverseasfund.com <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
