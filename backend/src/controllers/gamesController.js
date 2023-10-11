const gamesModel = require('../models/games')
const getAllGames = (request,response,company) =>
{
return response.status(200).json({"massage":"GamesController OK"})
} // end const getAllGames controller

module.exports = 
{
    getAllGames
}