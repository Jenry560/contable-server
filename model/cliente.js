const {model, Schema } = require("mongoose")

const ClientesSchema = new Schema ({
    Codigo: String,
    Nombre: String,
    Direccion: String,
    Numero: String,
    Cedula: String,
    Registro:String
})

module.exports = model("Clientes",ClientesSchema)