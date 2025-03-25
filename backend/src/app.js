const express = require("express")
const cors = require("cors")
const linkRoutes = require("./routes/linkRoutes")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/links", linkRoutes)

app.get("/", (req, res) => {
  res.send("Bienvenido al acortador de URLs")
})

module.exports = app
