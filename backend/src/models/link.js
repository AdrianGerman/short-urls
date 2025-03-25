class Link {
  constructor() {
    this.links = {}
    this.counter = 0
  }

  create(short, url) {
    this.links[short] = url
  }

  find(short) {
    return this.links[short]
  }

  generateShortUrl() {
    this.counter++
    return `shrt${this.counter}`
  }
}

module.exports = new Link()
