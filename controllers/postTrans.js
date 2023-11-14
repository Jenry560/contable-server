const transacciones = require("../model/transacciones")


const postTrans = async (req,res)=>{
    const{Codigo,Asiento,Descripcion,Partida,Monto,Saldo,Fecha,Registro} = req.body
    try {
        const NewTrans = new transacciones({
            Codigo,
            Asiento,
            Descripcion,
            Partida,
            Monto,
            Saldo,
            Fecha,
            Registro
        })
        const guardado = await NewTrans.save()
        if(guardado){
            res.send({check: true , mensaje : "La transaccion se registro correctamente"})
        }else{
            res.send(error)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = postTrans