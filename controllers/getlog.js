const Logeo = require("../model/log")

const getLogeo = async (req,res)=>{
   try {
    const finded = await Logeo.find()
    res.send(finded)
   } catch (error) {
    console.log(error)
   }

}

module.exports = getLogeo