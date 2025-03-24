import express, { json } from "express"
const app = express()

app.use(json())

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
