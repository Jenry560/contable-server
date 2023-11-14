const cliente = require('../model/cliente')

const postCliente = async (req,res)=>{
    const{Codigo,Nombre,Direccion,Numero,Cedula,Registro} = req.body

    try {
        const NuevoCliente = new cliente({
            Codigo,
            Nombre,
            Direccion,
            Numero,
            Cedula,
            Registro
        })
        const guardado = await NuevoCliente.save()
        if(guardado){
            res.send({check: true , mensaje : "El Cliente se registro correctamente"})
        }else{
            res.send(error)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = postCliente