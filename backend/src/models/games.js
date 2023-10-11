const connection = require("./connection")
const getAllGames = (company) =>
{
 const games = connection.execute("SELECT  * FROM "+company)
} // end const getAllGames

module.exports = 
{
    getAllGames
}