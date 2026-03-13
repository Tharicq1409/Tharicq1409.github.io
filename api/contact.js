export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  try {
    const response = await fetch('https://hook.eu1.make.com/as42r2glng18ppchjmt7gxmajgdci2r3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-make-apikey': process.env.MAKE_API_KEY,
      },
      body: JSON.stringify({ name, email, message }),
    })

    if (response.ok) {
      return res.status(200).json({ success: true })
    } else {
      return res.status(500).json({ error: 'Webhook failed' })
    }
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
