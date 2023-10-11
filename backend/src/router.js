const express = require('express')
const gamesController = require('./controllers/gamesController')
const router = express.Router()
router.get('/',(request,response)=>response.status(200).send("router funcionando"))
router.get('/games',gamesController.getAllGames)
module.exports = router