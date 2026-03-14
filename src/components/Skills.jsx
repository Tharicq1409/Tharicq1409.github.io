import './Skills.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = [
  {
    title: 'Integration & Middleware',
    icon: '🔗',
    color: '#6366f1',
    skills: [
      'Oracle Integration Cloud (OIC)',
      'Oracle Cloud Infrastructure (OCI)',
      'Workato (Foundations I & II)',
      'Make.com (Foundations – Advanced)',
      'REST / SOAP / WSDL',
    ],
  },
  {
    title: 'Oracle ERP & Fusion',
    icon: '☁️',
    color: '#06b6d4',
    skills: [
      'Oracle Fusion Cloud (Finance & SCM)',
      'Oracle EBS R12',
      'NetSuite',
      'BI Publisher (XML, Excel, PDF)',
      'OTBI / ESS Jobs / Bursting',
      'Oracle APEX',
    ],
  },
  {
    title: 'Database & Development',
    icon: '🗄️',
    color: '#f97316',
    skills: [
      'SQL',
      'PL/SQL (Procedures, Packages, Cursors)',
      'XML / XPath / XSLT / XSD',
      'OAuth 1.0 / EBS & Fusion Adapters',
      'File / FTP Adapters',
      'NetSuite REST Adapter',
      'Technical Design (MD70/TD)',
    ],
  },
]

const tagColors = ['#6366f1','#ec4899','#06b6d4','#f97316','#10b981','#6366f1','#ec4899','#06b6d4','#f97316','#10b981','#6366f1','#ec4899','#06b6d4','#f97316','#10b981','#6366f1','#ec4899','#06b6d4','#f97316','#10b981']

const tools = [
  'Oracle OIC', 'Oracle EBS R12', 'Oracle Fusion Cloud', 'NetSuite', 'OCI',
  'BI Publisher', 'OTBI', 'ESS Jobs', 'SQL', 'PL/SQL',
  'REST APIs', 'SOAP/WSDL', 'XML/XSLT', 'OAuth 1.0', 'FTP Adapters',
  'EBS Adapter', 'Fusion Cloud Adapter', 'Workato', 'Make.com', 'Oracle APEX',
]

const certifications = [
  { title: 'Oracle Cloud Platform Application Integration Professional', year: '2025' },
  { title: 'Oracle APEX Cloud Developer Professional', year: '2025' },
  { title: 'Oracle Cloud Infrastructure Certified Foundations Associate', year: '2025' },
  { title: 'Oracle Cloud Infrastructure Generative AI Professional', year: '2025' },
  { title: 'Make.com Partnership: Foundations, Basics, Intermediate & Advanced', year: '' },
  { title: 'Workato Certifications: Foundations Level I & II', year: '' },
]

export default function Skills() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()
  const toolsRef = useScrollAnimation()
  const certsRef = useScrollAnimation()

  return (
    <section id="skills">
      <div className="container">
        <div ref={headerRef} className="fade-up">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="divider" />
        </div>

        <div ref={gridRef} className="skills-grid fade-up">
          {categories.map(cat => (
            <div className="skill-card" key={cat.title} style={{ '--card-color': cat.color }}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-chips">
                {cat.skills.map(s => (
                  <span className="skill-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={toolsRef} className="tools-section fade-up">
          <p className="tools-label">Technologies &amp; Tools</p>
          <div className="tools-list">
            {tools.map((t, i) => (
              <span
                className="tool-tag"
                key={t}
                style={{ '--tag-color': tagColors[i % tagColors.length] }}
              >{t}</span>
            ))}
          </div>
        </div>

        <div ref={certsRef} className="certs-section fade-up">
          <p className="tools-label">Certifications</p>
          <div className="certs-timeline">
            {certifications.map((c, i) => (
              <div className="cert-row" key={c.title}>
                <div className="cert-dot" />
                <div className="cert-body">
                  <span className="cert-title">{c.title}</span>
                  {c.year && <span className="cert-year">{c.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
