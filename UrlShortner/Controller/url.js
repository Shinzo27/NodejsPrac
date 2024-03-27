const { nanoid } = require("nanoid");
const URL = require("../Models/url")

async function handleGenerateNewShortUrl(req, res){
    const body = req.body
    if(!body.url) return res.status(400).json({ error : "URL is Required"});
    const shortID = nanoid(8)
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({ id: shortID })
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId })
    return res.json({ totalCLicks: result.visitHistory.length, analytics: result.visitHistory })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}