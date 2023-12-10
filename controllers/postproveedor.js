const proveedor = require('../model/proveedor')

const postProveedor = async (req,res) =>{
    const{Codigo,Nombre,Direccion,Numero,Rnc,Correo,Registro} = req.body
    
    try {
        const newProveedor = new proveedor({
            Codigo,
            Nombre,
            Direccion,
            Numero,
            Rnc,
            Correo,
            Registro
        })
        console.log(newProveedor)
        const guardado = await newProveedor.save()
        if(guardado){
            res.send({check: true , mensaje : "El Proveedor se registro correctamente"})
        }else{
            res.send(error)
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = postProveedor