const express = require('express')
const router = require('./router')
const app = express();
require('dotenv').config()
const port = process.env.PORT
 app.use(router)
app.listen(port,()=>{console.log(`server running at port ${port}`)})