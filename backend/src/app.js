const express = require("express")
const app = express()
const linkRoutes = require("./routes/linkRoutes")

app.use(express.json())
app.use("/api/links", linkRoutes)

module.exports = app
