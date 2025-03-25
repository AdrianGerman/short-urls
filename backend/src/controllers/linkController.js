const linkModel = require("../models/link")

exports.shortenLink = (req, res) => {
  const { url } = req.body
  const shortUrl = linkModel.generateShortUrl()
  linkModel.create(shortUrl, url)
  res.json({ originalUrl: url, shortUrl })
}

exports.redirectToOriginal = (req, res) => {
  const { shortUrl } = req.params
  const originalUrl = linkModel.find(shortUrl)
  if (originalUrl) {
    res.redirect(originalUrl)
  } else {
    res.status(404).send("URL not found")
  }
}
