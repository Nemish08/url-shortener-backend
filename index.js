const express = require("express")
const cors = require("cors")
const {connect_mongoose} = require("./connect.js")
const urlRoute = require("./routs/url")
const URL = require("./models/url.js")
require('dotenv').config()

connect_mongoose(process.env.MONGODB).then(()=>console.log("db connected"))

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/',urlRoute)

app.get('/url/:shortid',async (req,res)=>{
    const shortId = req.params.shortid
    const entry = await URL.findOneAndUpdate({shortId},{
        $push : {
            visitHistory : {
                timestamp: Date.now(),
            }
        }
    })
    res.redirect(entry.redirectURL);
})

app.listen(process.env.PORT,()=>console.log(`server running at port : ${process.env.PORT}`))