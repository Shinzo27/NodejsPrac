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
        createdBy: req.user._id
    })
    return res.render("home", {
        id: shortID
    });
    // return res.json({ id: shortID })
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId })
    return res.json({ totalCLicks: result.visitHistory.length, analytics: result.visitHistory })
}

async function handleRedirect(req,res){
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
    {
        shortId
    }, 
    { 
        $push: {
            visitHistory: {
                timeStamp: Date.now()
            },
        },
    });
    // res.send({ result: entry.redirectUrl})
    console.log(entry.redirectUrl)
    return res.redirect(entry.redirectUrl)
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
    handleRedirect
}