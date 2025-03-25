const express = require("express")
const linksController = require("../controllers/linkController")
const router = express.Router()

router.post("/shorten", linksController.shortenLink)
router.get("/:shortUrl", linksController.redirectToOriginal)

module.exports = router
