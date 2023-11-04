const express = require('express')
//const path = require('path');
const exclusiveGamesController = require('./controllers/exclusiveGames')
const notExclusiveGamesController = require('./controllers/notExclusiveGames')
const router = express.Router()
//router.get('/',(request,response)=>response.status(200).sendFile(path.join(__dirname, './index.html')))
router.get('/games/:companyName',exclusiveGamesController.getAllGames)
router.post('/games', exclusiveGamesController.insertGame)
router.delete('/games',exclusiveGamesController.deleteGame)
router.put('/games',exclusiveGamesController.updateGame)
router.post('/gamesNotExclusive',notExclusiveGamesController.insertGame)
router.delete('/gamesNotExclusive',notExclusiveGamesController.deleteGame)
router.delete('/gamesNotExclusive',notExclusiveGamesController.updateGame)
module.exports = router