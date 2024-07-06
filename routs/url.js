const express = require("express")
const {handleGenerateNewShortURL} = require("../controlers/url.js")
const router = express.Router();

router.post("/",handleGenerateNewShortURL)

module.exports = router