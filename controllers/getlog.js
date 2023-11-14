const Signin = require("../model/log")

const getLogeo = async (req,res)=>{
   try {
    const finded = await Signin.find()
    res.send(finded)
   } catch (error) {
    console.log(error)
   }

}

module.exports = getLogeo