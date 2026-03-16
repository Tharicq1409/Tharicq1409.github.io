import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHiding(true), 1600)
    const done = setTimeout(() => onDone(), 2100)
    return () => { clearTimeout(timer); clearTimeout(done) }
  }, [onDone])

  return (
    <div className={`loader-overlay ${hiding ? 'loader-hide' : ''}`}>
      <div className="loader-content">
        <div className="loader-icon">&lt;/&gt;</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}
