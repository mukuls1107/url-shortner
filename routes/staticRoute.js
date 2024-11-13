const express = require("express")
const router = express.Router();
const url = require("../model/url")

router.get("/", async (req, res) => {
    const all = await url.find({})
    return res.render("home", {
        urls: all
    })
})

module.exports = router;