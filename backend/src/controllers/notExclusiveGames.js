const notExclusiveGamesModel = require('../models/notExclusiveGames')


const getGame = async(request,response) =>
{
  const id = request.params.id
  Game = await notExclusiveGamesModel.getGamefromId(id)
  return response.status(200).json(Game)
}
const insertGame = async(request,response)=>
{
 const createGame = await notExclusiveGamesModel.insertGame(request.body)
 return response.status(201).json(createGame)
}// end const insertGame controller

const deleteGame = async (request,response) =>
{
  const deletedGame = await notExclusiveGamesModel.deleteGame(request.body)
  return response.status(204).json()
}// end const deleteGame controller

const updateGame = async (request,response) =>
{
  const updateGame = await notExclusiveGamesModel.updateGame(request.body)
  return response.status(201).json(updateGame)
}// end const updateGame controller
module.exports = 
{
    insertGame,
    deleteGame,
    updateGame,
    getGame
}