const {model , Schema} = require("mongoose")

const LogeoSchema = new Schema({
    Nombre: String,
    Correo: String,
    Contraseña: String,
})




module.exports = model("Signins",LogeoSchema)