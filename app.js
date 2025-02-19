require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const connDB = require('./config/connectDB') 
const routes = require('./routes/routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('',routes)

const startServer = async () =>{
    try {
        await connDB()
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log('error..')
    }
}
startServer()