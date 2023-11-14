const {model,Schema} = require('mongoose')
const CounterModel = require('./counter')

const TrasaSchema = new Schema({
    Codigo: String,
    Asiento: String,
    Descripcion: String,
    Partida: String,
    Monto: Number,
    Saldo: Number,
    Fecha : String,
    Registro: String,
    seq: {type: Number, default : 0}
})

TrasaSchema.pre("save", async function(next){
    if(!this.seq){
        const counter = await CounterModel.findByIdAndUpdate({_id:"signinSeq"},{$inc: {seq: 1}},{new: true, upsert: true})
        this.seq = counter.seq
    }
    next()
})

module.exports = model("Transacciones",TrasaSchema)