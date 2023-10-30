const gamesModel = require('../models/games')
const getAllGames  = async(request,response) =>
{ const company = request.params.companyName
  const gamesFromCompany = await  gamesModel.getAllGamesFromCompany(company)
return response.status(200).json({gamesFromCompany})
} // end const getAllGames controller

module.exports = 
{
    getAllGames
}