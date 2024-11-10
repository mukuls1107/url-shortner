const URL = require("../model/url")
const shortid = require('shortid');
const url = require("../model/url.js")

async function handleAllUrlData(req, res) {
    const data = await url.find({});
    return res.status(200).json(data);
}

async function handleAnalytics(req, res) {
    const id = req.params.id;

    
    const data = await url.findOne({shortId: id});
    if (!data) return res.status(404).json({msg: "Id not found."})

    return res.status(200).json({numOfClicks: data.visitHistory.length, id: data.shortid, url: data.redirectURL});

}

async function handleRedirectShortIdToUrl(req, res) {
    const id = req.params.id;
    const getData = await url.findOneAndUpdate({shortId: id},  // Ensure consistent field name
        {
            $push: {
                visitHistory: {
                    timestamp: new Date()  // Store current date/time as a Date object
                }
            }
        });
    if (!getData) return res.status(404).json({msg: "Id not found"});
    res.redirect(getData.redirectURL);


}


async function handleGenerateNewUrl(req, res) {

    const body = req.body;
    if (!body.url) return res.status(400).send({msg: "No Url Provided to short."})

    const shortId = shortid.generate();
    await URL.create({
        shortId: shortId, redirectURL: body.url, visitHistory: []

    })

    return res.status(200).send({msg: `URL created with id: ${shortId}`})
}


module.exports = {
    handleGenerateNewUrl, handleRedirectShortIdToUrl, handleAllUrlData, handleAnalytics
}