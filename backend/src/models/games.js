const connection = require("./connection")

const getAllGamesFromCompany = async (companyName) => {
        const query = `SELECT * from ${companyName};`
        const [games] = await connection.execute(query)
        return games
}
const insertGame = async(game) =>
{
    const {company} = game 
    const {gameName} = game
    const {descriptionGame} = game
    const {linkVideo} = game
    const {oficalPrice} = game
    const {oficialDate} = game

    const query = `INSERT INTO ${company} VALUES (null,'${gameName}','${descriptionGame}','${linkVideo}',${oficalPrice},'${oficialDate}');`
    const [insertGame] = await connection.execute(query)
    return {insertId:insertGame.insertId}
}
module.exports = {
    getAllGamesFromCompany,
    insertGame
}
