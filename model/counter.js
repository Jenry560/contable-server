const {model , Schema} = require("mongoose")

const CounterSchema = new Schema({
    _id: {type: String , required: true},
    seq: {type: Number, default: 1}
})

const CounterModel = model("Counters",CounterSchema)


module.exports = CounterModel