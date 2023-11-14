const SigninModel = require("../model/log")
const bcrypt = require('bcrypt');


const postlog = async(req,res)=>{
    const {Nombre,Correo,Contraseña}=req.body;    
    
    try {
        const registrado = await SigninModel.findOne({Correo: Correo})
        if (registrado) {
            res.send({check: false , mensaje : "El correo ya esta registrado"})
        } else {
            let ContraHash = await bcrypt.hash(Contraseña,8)
            const NuevoLogeo = new SigninModel({
                Nombre,
                Correo,
                Contraseña: ContraHash
            });

            
           const guardado = await NuevoLogeo.save()
           if (guardado) {
                res.send({check: true , mensaje : "El correo se registro correctamente"})
           } else {
                res.send(error)
           }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = postlog;