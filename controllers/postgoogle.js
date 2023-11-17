const signins = require("../model/log")

const postGoogle = async (req,res) =>{
    const {Correo,Nombre } = req.body
    const correTower = Correo.toLowerCase()
    try {
       const isLogged =  await signins.findOne({Correo : correTower})
       if(isLogged){
        res.send({check: true , mensaje : `Bienvenido de nuevo ${isLogged.Nombre}`, Nombre: isLogged.Nombre,Correo: isLogged.Correo})
       }else{

        const NuevoSignins = new signins({
            Nombre,
            Correo: correTower
        });

        
        const guardado = await NuevoSignins.save()
        if(guardado){
            res.send({check: true, mensaje: "Felicidades se ha registrado correctamente",Nombre: guardado.Nombre,Correo: guardado.Correo})
        }
       }
    } catch (error) {
        console.log(error)
    }
}

module.exports = postGoogle