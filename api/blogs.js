export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  try {
    const response = await fetch('https://medium.com/feed/@tharicq1409')
    if (!response.ok) throw new Error('Failed to fetch Medium feed')
    const xml = await response.text()

    const items = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xml)) !== null && items.length < 3) {
      const block = match[1]

      // Title
      const titleMatch = block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)
      const title = titleMatch ? titleMatch[1].trim() : 'Untitled'

      // Link
      const linkMatch = block.match(/<link>(https?:\/\/[^\s<]+)<\/link>/)
      const link = linkMatch ? linkMatch[1].trim() : '#'

      // Published date
      const dateMatch = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const pubDate = dateMatch
        ? new Date(dateMatch[1].trim()).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          })
        : ''

      // Thumbnail from media:content
      const thumbMatch = block.match(/<media:content[^>]+url="([^"]+)"/)
      const thumbnail = thumbMatch ? thumbMatch[1] : null

      // Categories / tags
      const catMatches = [...block.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g)]
      const tags = catMatches.slice(0, 3).map(m => m[1].trim())

      // Read time from description word count
      const descMatch = block.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)
      const descHtml = descMatch ? descMatch[1] : ''
      const text = descHtml.replace(/<[^>]+>/g, '')
      const wordCount = text.trim().split(/\s+/).filter(Boolean).length
      const readTime = Math.max(1, Math.ceil(wordCount / 200))

      items.push({ title, link, pubDate, thumbnail, tags, readTime })
    }

    res.json({ posts: items })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
