import { Link } from 'react-router-dom'
import { ArrowLeft, GraduationCap } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Chairman.css'

export default function Chairman() {
  return (
    <>
      <Navbar />

      <main className="chairman">
        <div className="container chairman__inner">
          <Link to="/" className="chairman__back">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="chairman__card">
            <div className="chairman__avatar">PS</div>
            <h1 className="chairman__name">Priyanshu Sharma</h1>
            <p className="chairman__title">Chairman &amp; CEO</p>
            <p className="chairman__edu">
              <GraduationCap size={16} strokeWidth={1.8} /> Bachelors, IIT Madras
            </p>
            <p className="chairman__desc">
              Priyanshu Sharma leads Shyam Overseas Fund with a vision for global impact, leveraging his IIT
              Madras education and deep expertise in multi-asset investment management.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
