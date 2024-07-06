const mongoose = require("mongoose")

function connect_mongoose(url){
    return mongoose.connect(url)
}

module.exports = {connect_mongoose}
