const Link = require("../models/link")

exports.shortenLink = async (req, res) => {
  const { url } = req.body
  try {
    const shortUrl = await Link.create(url)
    res.json({ originalUrl: url, shortUrl })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.redirectToOriginal = async (req, res) => {
  const { shortUrl } = req.params
  try {
    const originalUrl = await Link.findByShortUrl(shortUrl)
    if (originalUrl) {
      res.redirect(originalUrl)
    } else {
      res.status(404).send("URL not found")
    }
  } catch (error) {
    res.status(500).send("Server Error")
  }
}
