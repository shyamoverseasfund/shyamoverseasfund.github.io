import { Link } from 'react-router-dom'
import {
  Briefcase,
  TrendingUp,
  Landmark,
  Repeat,
  Handshake,
  Building2,
  MapPin,
  Mail,
  ArrowRight,
  GraduationCap,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
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

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__content">
          <span className="eyebrow eyebrow--light">Global Multi-Asset Fund</span>
          <h1>Shyam Overseas Fund</h1>
          <p className="hero__tagline">Investing in businesses, markets, and industries that shape a better future.</p>
          <div className="hero__locations">
            {LOCATIONS.map((loc) => (
              <span key={loc.name}>{loc.name}</span>
            ))}
          </div>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--gold">
              Contact Us <ArrowRight size={16} />
            </a>
            <a href="#about" className="btn btn--ghost">
              Learn More
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="container about">
            <SectionHeading eyebrow="Who We Are" title="About Us" />
            <p className="about__text">
              Shyam Overseas Fund is a global multi-asset fund management firm investing in businesses, stocks,
              bonds, securities markets, forex, business acquisitions, and real estate. We operate across
              India, the USA, the UK, and Dubai — bringing disciplined capital allocation to every market we enter.
            </p>
          </div>
        </section>

        <section className="section section--tinted" id="mission">
          <div className="container mission">
            <SectionHeading eyebrow="Our Purpose" title="Our Mission" align="center" />
            <p className="mission__text">
              We invest in industries that create a positive impact on people's lives — pairing rigorous
              financial discipline with a long-term view of the world we want to help build.
            </p>
          </div>
        </section>

        <section className="section" id="investments">
          <div className="container">
            <SectionHeading eyebrow="Where We Invest" title="Our Investment Areas" />
            <div className="investment-grid">
              {INVESTMENTS.map(({ icon: Icon, title, desc }) => (
                <div className="investment-card" key={title}>
                  <div className="investment-card__icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--navy" id="locations">
          <div className="container">
            <SectionHeading eyebrow="Where We Operate" title="Our Locations" align="center" />
            <div className="locations-grid">
              {LOCATIONS.map((loc) => (
                <div className="location-card" key={loc.name}>
                  <MapPin size={18} strokeWidth={1.6} />
                  <div>
                    <span className="location-card__name">{loc.name}</span>
                    <span className="location-card__detail">{loc.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="container">
            <SectionHeading eyebrow="Leadership" title="Chairman & CEO" />
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

        <section className="section section--tinted" id="contact">
          <div className="container contact">
            <SectionHeading eyebrow="Get In Touch" title="Contact Us" align="center" />
            <a href="mailto:info@shyamoverseasfund.com" className="contact__email">
              <Mail size={18} strokeWidth={1.7} />
              info@shyamoverseasfund.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
