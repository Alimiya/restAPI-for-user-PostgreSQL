const express= require('express')
const userRoute= require('./routes/userRoute')
const dotenv = require("dotenv")
const path = require('path')

dotenv.config({path: './config/.env'})

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api',userRoute)

app.listen(process.env.PORT, () => {console.log(`http://localhost:${process.env.PORT}`)})
