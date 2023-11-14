const SigninModel = require("../model/log")

const getLogeo = async (req,res)=>{
   try {
    const finded = await SigninModel.find()
    res.send(finded)
   } catch (error) {
    console.log(error)
   }

}

module.exports = getLogeo