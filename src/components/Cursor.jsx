import { useEffect, useRef } from 'react'
import './Cursor.css'

const COLORS = ['#6366f1', '#ec4899', '#06b6d4', '#f97316', '#10b981', '#8b5cf6']
const MAX_PARTICLES = 30

export default function Cursor() {
  const dotRef = useRef(null)
  const containerRef = useRef(null)
  const particles = useRef([])
  const colorIndex = useRef(0)
  const lastPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const dot = dotRef.current
    const container = containerRef.current
    if (!dot || !container) return

    const spawnParticle = (x, y) => {
      if (particles.current.length >= MAX_PARTICLES) {
        const oldest = particles.current.shift()
        oldest.el.remove()
      }

      const el = document.createElement('div')
      el.className = 'trail-particle'
      const size = Math.random() * 8 + 6
      const color = COLORS[colorIndex.current % COLORS.length]
      colorIndex.current++

      el.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
      `
      container.appendChild(el)

      const particle = { el, born: performance.now(), x, y, size }
      particles.current.push(particle)

      // Remove after animation
      setTimeout(() => {
        el.remove()
        particles.current = particles.current.filter(p => p !== particle)
      }, 700)
    }

    let lastSpawn = 0
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e

      // Move cursor dot
      dot.style.transform = `translate(${x}px, ${y}px)`

      // Spawn particles with distance throttle
      const dx = x - lastPos.current.x
      const dy = y - lastPos.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const now = performance.now()

      if (dist > 8 && now - lastSpawn > 30) {
        spawnParticle(x, y)
        lastPos.current = { x, y }
        lastSpawn = now
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="trail-container" ref={containerRef} />
    </>
  )
}
