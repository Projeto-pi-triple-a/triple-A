const connection = require("./connection")
const getAllGamesFromCompany = async () =>
{
 const [games] = await connection.execute("SELECT  * FROM microsoft")
 return games;
} // end const getAllGames

module.exports = 
{
    getAllGamesFromCompany
}