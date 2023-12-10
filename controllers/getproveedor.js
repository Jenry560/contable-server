const Proveedores = require('../model/proveedor')

const getProveedor = async (req,res)=>{
    try {
       const proveedor = await Proveedores.find() 
       res.send(proveedor)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getProveedor