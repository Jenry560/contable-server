const {model, Schema } = require("mongoose")

const ProveedorSchema = new Schema({
    Codigo: String,
    Nombre: String,
    Direccion: String,
    Numero: String,
    Rnc: String,
    Correo: String,
    Registro:String
})

module.exports = model('Proveedores',ProveedorSchema)