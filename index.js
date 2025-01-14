const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./db/mongo")
const controllers = require('./controllers')


app.use(cors())
app.use(express.json())

require("dotenv").config()

//Estructura de los logeos
app.get("/getlog",controllers.getLogeo)
app.post("/postlog",controllers.postlog)
app.post("/compare",controllers.getSign)

//Estructura de los clientes
app.get("/getcliente",controllers.getCliente)
app.post("/postcliente",controllers.postCliente)

//Estructura de las transacciones
app.get('/getTrans',controllers.getTrans)
app.post('/postTrans',controllers.postTrans)

//Liquidar transaccciones 
app.post("/liquidar",controllers.postliquidar)

//google
app.post("/google",controllers.postGoogle)

//Estructura de los proveedores
app.get('/getProveedores',controllers.getProveedor)
app.post('/postProveedor',controllers.postProveedor)

PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server on ${PORT}`)
})
