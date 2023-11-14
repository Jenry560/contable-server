const cliente = require("../model/cliente")


const getCliente = async (req,res)=>{

    try {
        const Client = await cliente.find()
        res.send(Client)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getCliente