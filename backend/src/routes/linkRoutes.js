const express = require("express")
const router = express.Router()
const linksController = require("../controllers/linkController")

router.post("/shorten", linksController.shortenLink)
router.get("/:shortUrl", linksController.redirectToOriginal)

module.exports = router
