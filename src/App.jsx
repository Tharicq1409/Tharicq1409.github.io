import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Blogs />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-glow" />
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-name">Sheik Mohamed Tharicq</span>
            <span className="footer-role">Oracle Technical &amp; OIC Consultant</span>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="https://linkedin.com/in/sheik-mohamed-tharicq" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://medium.com/@tharicq1409" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </a>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© {new Date().getFullYear()} Sheik Mohamed Tharicq</span>
            <span className="footer-built">Made with <span className="footer-heart">♥</span></span>
          </div>

          <div className="footer-stack">
            <span className="footer-stack-label">Powered by</span>
            <div className="footer-stack-badges">
              <span className="stack-badge stack-react">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><path d="M12 2C6.48 2 2 6.93 2 12s4.48 10 10 10 10-4.93 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.58-8-8s3.59-8 8-8 8 3.58 8 8-3.59 8-8 8z" opacity=".3"/><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg>
                React
              </span>
              <span className="stack-badge stack-vite">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M21.18 5.438L12.9 20.512a.5.5 0 0 1-.888-.054L9.264 13.95l-1.96 1.848a.5.5 0 0 1-.832-.493L9.63 4.54a.5.5 0 0 1 .93-.04l2.595 5.764 1.98-3.43a.5.5 0 0 1 .87.01l5.175 8.943"/></svg>
                Vite
              </span>
              <span className="stack-badge stack-make">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Make.com
              </span>
              <span className="stack-badge stack-vercel">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19.5h20L12 2z"/></svg>
                Vercel
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
