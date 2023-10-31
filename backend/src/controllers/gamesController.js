const gamesModel = require('../models/games')
const getAllGames  = async(request,response) =>
{ const company = request.params.companyName
  const gamesFromCompany = await  gamesModel.getAllGamesFromCompany(company)
return response.status(200).json({gamesFromCompany})
} // end const getAllGames controller

const insertGame = async(request,response)=>
{
  //sendgames/:company,:gameName,:descriptionGame,:linkVideo,:oficialPrice,:oficialDate
 const company = request.params.company
 const gameName = request.params.gameName 
 const descriptionGame = request.params.descriptionGame
 const linkVideo = request.params.linkVideo 
 const oficalPrice = request.params.oficialPrice
 const oficialDate = request.params.oficalPrice
}// end const sendGames controller
module.exports = 
{
    getAllGames,
    insertGame
}