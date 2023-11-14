const transacciones = require('../model/transacciones')


const getTrans = async (req,res)=>{
    try {
        const finded = await transacciones.find()
        res.send(finded)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getTrans