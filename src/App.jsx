import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Sheik Mohamed Tharicq. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App
