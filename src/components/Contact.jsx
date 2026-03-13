import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactLinks = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'tharicq1409@yahoo.com',
      href: 'mailto:tharicq1409@yahoo.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sheik-mohamed-tharicq',
      href: 'https://www.linkedin.com/in/sheik-mohamed-tharicq-b45061223/',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Available for Remote & On-site',
      href: null,
    },
  ]

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Let&apos;s Talk</p>
        <h2 className="section-title">Get in Touch</h2>
        <div className="divider" />

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Looking for an Oracle Integration specialist? Whether it&apos;s OIC,
              ERP Cloud integrations, or technical consulting — let&apos;s connect
              and discuss how I can help.
            </p>
            <div className="contact-links">
              {contactLinks.map(c => (
                <div className="contact-link-item" key={c.label}>
                  <span className="contact-link-icon">{c.icon}</span>
                  <div>
                    <p className="contact-link-label">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="contact-link-value" target="_blank" rel="noreferrer">
                        {c.value}
                      </a>
                    ) : (
                      <p className="contact-link-value">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
            {status === 'sent' && (
              <p className="form-success">✅ Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-error">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
