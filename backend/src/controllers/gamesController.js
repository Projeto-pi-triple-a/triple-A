const gamesModel = require('../models/games')
const getAllGames  = async(request,response) =>
{ //const company = request.params.idCompany
    const gamesFromCompany = await  gamesModel.getAllGamesFromCompany()
return response.status(200).json({gamesFromCompany})
} // end const getAllGames controller

module.exports = 
{
    getAllGames
}