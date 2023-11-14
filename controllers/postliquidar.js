const transacciones = require("../model/transacciones")


const postliquidar = async (req,res)=>{
    const {id_positivo,id_negativo,value} = req.body
   try {
    if (value > 0){
        const negativo = await transacciones.updateOne({seq: id_negativo},{$set:{Saldo: 0}})
        const postivo = await transacciones.updateOne({seq: id_positivo},{$set:{Saldo: value}})

        if(postivo || negativo){
            res.send(true)
        }
    }else if(value < 0){
        const negativo = await transacciones.updateOne({seq: id_negativo},{$set:{Saldo: value}})
        const postivo = await transacciones.updateOne({seq: id_positivo},{$set:{Saldo: 0}})
        if(postivo || negativo){
            res.send(true)
        }
    }else if(value === 0){
        const negativo = await transacciones.updateOne({seq: id_negativo},{$set:{Saldo: 0}})
        const postivo = await transacciones.updateOne({seq: id_positivo},{$set:{Saldo: 0}})
        if(postivo || negativo){
            res.send(true)
        }
    }
   } catch (error) {
     console.log(error)
   }
}

module.exports = postliquidar