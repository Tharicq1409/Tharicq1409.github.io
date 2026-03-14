import { useRef, useEffect } from 'react'

export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)
      const threshold = Math.max(rect.width, rect.height) * 1.6

      if (distance < threshold) {
        const moveX = distX * strength
        const moveY = distY * strength
        el.style.transform = `translate(${moveX}px, ${moveY}px)`
        el.style.transition = 'transform 0.15s ease'
      } else {
        el.style.transform = 'translate(0, 0)'
        el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    }

    const onMouseLeave = () => {
      el.style.transform = 'translate(0, 0)'
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [strength])

  return ref
}
