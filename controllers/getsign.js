const SigninModel = require("../model/log")
const bcrypt = require('bcrypt');

const getSign = async (req,res)=>{
    const {Correo,Contraseña} = req.body

  try {
    const user = await SigninModel.findOne({Correo: Correo})
    if(user){
        let compare = await bcrypt.compare(Contraseña,user.Contraseña)
        if(compare){
            res.send({check: true , mensaje: "La Contraseña es correcta",Nombre: user.Nombre,Correo: user.Correo})
        }else{
            res.send({check: false , mensaje: "La Contraseña es incorrecta"})   
        }
    }else{
       res.send({check: false , mensaje: "El correo no es valido"})
    }
  } catch (error) {
   console.log(error) 
  }
}

module.exports = getSign