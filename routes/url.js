const express = require('express');
const router = express.Router();
const {handleGenerateNewUrl, handleRedirectShortIdToUrl, handleAllUrlData} = require("../controllers/url.")


router.post("/", handleGenerateNewUrl)
    router.get("/:id", handleRedirectShortIdToUrl)
router.get("/", handleAllUrlData)

module.exports = router;