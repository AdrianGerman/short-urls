const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("¡Hola! El servidor está funcionando correctamente.")
})

module.exports = router
