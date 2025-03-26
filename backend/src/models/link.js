const pool = require("../db")

const Link = {
  create: async (originalUrl) => {
    try {
      const [result] = await pool.query(
        "INSERT INTO links (original_url) VALUES (?)",
        [originalUrl]
      )

      const shortUrl = Link.generateShortUrl(result.insertId)

      await pool.query("UPDATE links SET short_url = ? WHERE id = ?", [
        shortUrl,
        result.insertId
      ])

      return { id: result.insertId, originalUrl, shortUrl }
    } catch (err) {
      console.error("Error en Link.create:", err.message)
      throw err
    }
  },

  findByShortUrl: async (shortUrl) => {
    try {
      const [rows] = await pool.query(
        "SELECT original_url FROM links WHERE short_url = ?",
        [shortUrl]
      )
      return rows.length > 0 ? rows[0].original_url : null
    } catch (err) {
      console.error("Error en Link.findByShortUrl:", err.message)
      throw err
    }
  },

  generateShortUrl: (id) => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let shortUrl = ""
    while (id > 0) {
      shortUrl = characters[id % 62] + shortUrl
      id = Math.floor(id / 62)
    }
    return shortUrl
  }
}

module.exports = Link
