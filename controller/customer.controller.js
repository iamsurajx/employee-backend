const customer = require('../models/customermodel')
exports.AddCustomer = async(req,res)=>{
    try {
        const {fname,email,current}=req.body
        const sendData = await customer.create({
            fname,email,current
        })
        return res.status(201).json({message:'Registration Form',data:sendData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Internal server error...'})
        
    }
}
exports.viewCustomer = async (req,res) =>{
    try {
        const view = await customer.find()
        return res.status(200).json({message:'View data',data:view})
    } catch (error) {
        return res.status(500).json({message:'Internal server error...'})
    }
}
exports.SingleViewCustomber=async(req,res)=>{
    try {
        const {id} = req.params
        const view = await customer.findById(id)
        return res.status(200).json({message:'View data',data:view})
    } catch (error) {
        return res.status(500).json({message:'Internal server error...'})
    }    
}