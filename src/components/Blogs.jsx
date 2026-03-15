import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Blogs.css'

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const headerRef = useScrollAnimation({ className: 'animate-in', animationClass: 'fade-up' })
  const gridRef = useScrollAnimation({ className: 'animate-in', animationClass: 'fade-up', stagger: true })

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error)
        setPosts(data.posts)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="blog" className="blogs-section">
      <div className="blogs-orb blogs-orb-1" />
      <div className="blogs-orb blogs-orb-2" />

      <div className="container">
        <div className="blogs-header fade-up" ref={headerRef}>
          <span className="section-eyebrow">LATEST WRITING</span>
          <h2 className="section-title">From My Blog</h2>
          <div className="section-divider" />
          <p className="blogs-subtitle">Thoughts on Oracle, integration, and modern enterprise tech</p>
        </div>

        {loading && (
          <div className="blogs-loading">
            <div className="blogs-skeleton" />
            <div className="blogs-skeleton" />
            <div className="blogs-skeleton" />
          </div>
        )}

        {error && (
          <div className="blogs-error">
            <p>Could not load posts. <a href="https://medium.com/@tharicq1409" target="_blank" rel="noreferrer">View on Medium →</a></p>
          </div>
        )}

        {!loading && !error && (
          <div className="blogs-grid stagger" ref={gridRef}>
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="blog-card fade-up"
              >
                <div className="blog-card-thumb">
                  {post.thumbnail
                    ? <img src={post.thumbnail} alt={post.title} loading="lazy" />
                    : <div className="blog-card-thumb-fallback">
                        <span className="blog-thumb-icon">&lt;/&gt;</span>
                      </div>
                  }
                  <span className="blog-read-badge">{post.readTime} min read</span>
                </div>
                <div className="blog-card-body">
                  {post.tags.length > 0 && (
                    <div className="blog-tags">
                      {post.tags.map((tag, j) => (
                        <span key={j} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  <h3 className="blog-title">{post.title}</h3>
                  <div className="blog-meta">
                    <span className="blog-date">{post.pubDate}</span>
                  </div>
                </div>
                <div className="blog-card-footer">
                  <span className="blog-read-link">Read on Medium →</span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="blogs-cta fade-up">
          <a href="https://medium.com/@tharicq1409" target="_blank" rel="noreferrer" className="btn-outline">
            View All Posts on Medium →
          </a>
        </div>
      </div>
    </section>
  )
}
