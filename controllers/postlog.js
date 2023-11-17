const signins = require("../model/log")
const bcrypt = require('bcrypt');


const postlog = async(req,res)=>{
    const {Nombre,Correo,Contraseña}=req.body; 
    let correTower = Correo.toLowerCase()

    try {
        const registrado = await signins.findOne({Correo: correTower})
        if (registrado) {
            res.send({check: false , mensaje : "El correo ya esta registrado"})
        } else {
            let ContraHash = await bcrypt.hash(Contraseña,8)
            
            const NuevoSignins = new signins({
                Nombre,
                Correo: correTower,
                Contraseña: ContraHash
            });

            
           const guardado = await NuevoSignins.save()
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