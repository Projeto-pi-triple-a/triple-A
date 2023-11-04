const express = require('express')
const path = require('path');
const gamesController = require('./controllers/gamesController')
const router = express.Router()
router.get('/',(request,response)=>response.status(200).sendFile(path.join(__dirname, './index.html')))
router.get('/games/:companyName',gamesController.getAllGames)
router.post('/games', gamesController.insertGame)
router.delete('/games',gamesController.deleteGame)
module.exports = router