const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    current:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})
const Customer = new mongoose.model('Customer',CustomerSchema)
module.exports=Customer