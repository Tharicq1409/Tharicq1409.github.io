import './Hero.css'
import profileImg from '../assets/profile.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
const heroBg = 'https://res.cloudinary.com/dgjie55ky/video/upload/RedbullClip_otkfqy.mp4'

export default function Hero() {
  const contentRef = useScrollAnimation({ threshold: 0.1 })
  const visualRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroBg} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="hero-orb-cyan" />
      <div className="container hero-container">
        <div className="hero-content fade-up" ref={contentRef}>
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">Sheik Mohamed<br />Tharicq</h1>
          <p className="hero-role">
            Oracle Technical &amp; <span className="accent">OIC Consultant</span>
          </p>
          <p className="hero-bio">
            Oracle Integration Cloud professional with <strong>4+ years of experience</strong> in
            Oracle ERP implementation, support, and technical consulting. Specialized in OIC
            integrations, Oracle Fusion Cloud (Finance &amp; SCM), BI Publisher reports, and
            end-to-end inbound/outbound flows between Oracle EBS R12 and Fusion Cloud.
            Hands-on across OIC, Workato, and Make.com iPaaS platforms.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#skills" className="btn btn-ghost">View Skills</a>
            <a
              href="/sheikmohamedtharicq_resume.pdf"
              download="SheikMohamedTharicq_Resume.pdf"
              className="btn btn-download"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Integrations Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Global Clients</span>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-right" ref={visualRef}>
          <div className="avatar-ring">
            <div className="avatar-placeholder">
              <img src={profileImg} alt="Sheik Mohamed Tharicq" className="avatar-img" />
            </div>
          </div>
          <div className="floating-badge badge-1">
            <span className="badge-icon">⚡</span>
            <span>OIC Developer</span>
          </div>
          <div className="floating-badge badge-2">
            <span className="badge-icon">☁️</span>
            <span>Oracle Fusion</span>
          </div>
        </div>
      </div>
    </section>
  )
}
