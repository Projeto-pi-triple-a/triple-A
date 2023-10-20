const express = require('express')
const router = require('./router')
const app = express();
require('dotenv').config()
const port = 3000
 app.use(router)
 app.use(express.static("html"))
app.listen(port,()=>{console.log(`server running at port ${port}`)})