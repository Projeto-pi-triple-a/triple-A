require('dotenv').config()
const express = require('express')
const router = require('./router')
const app = express();
const port = process.env.port
app.use(router)
app.listen(port,()=>{console.log(`server running at port ${port}`)})
console.log("tipo de conexão: "+process.env.host)
console.log("tipo de user: "+process.env.user)
console.log("senha: "+process.env.password)
console.log("BD usado: "+process.env.database)