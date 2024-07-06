const shortid =require("shortid")
const URL = require("../models/url.js")

async function handleGenerateNewShortURL(req,res){
    const body = req.body
    // console.log(req);
    console.log(body.url);
    if(!body.url) return res.status(400).json({error:'url is requried'})
         
        const shortID = shortid();
        await URL.create({
            shortId : shortID,
            redirectURL :body.url,
            visitHistory:[],
        })
        return res.json({id:shortID})
}

module.exports = {handleGenerateNewShortURL}