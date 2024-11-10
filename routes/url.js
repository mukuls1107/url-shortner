const express = require('express');
const router = express.Router();
const {
    handleGenerateNewUrl,
    handleRedirectShortIdToUrl,
    handleAllUrlData,
    handleAnalytics
} = require("../controllers/url.js");

router.post("/", handleGenerateNewUrl);
router.get("/:id", handleRedirectShortIdToUrl);
router.get("/", handleAllUrlData);
router.get("/analytics/:id", handleAnalytics);


module.exports = router;
