const mongoose = require('mongoose')
require("dotenv").config()
mongoose.connect(process.env.DATA_BASEURL)

const objetodb = mongoose.connection

objetodb.on("connected",()=>{console.log("Base de dato conectada")})
objetodb.on("error",()=>{console.log("error")})

module.exports = mongoose