const gamesModel = require('../models/games')
const getAllGames  = async(request,response) =>
{ const company = request.params.companyName
  const gamesFromCompany = await  gamesModel.getAllGamesFromCompany(company)
return response.status(200).json(gamesFromCompany)
} // end const getAllGames controller

const insertGame = async(request,response)=>
{
 const createGame = await gamesModel.insertGame(request.body)
 return response.status(201).json(createGame)
}// end const sendGames controller

const deleteGame = async (request,response) =>{
  const deletedGame = await gamesModel.deleteGame(request.body)
  return response.status(204).json()
}
module.exports = 
{
    getAllGames,
    insertGame,
    deleteGame
}