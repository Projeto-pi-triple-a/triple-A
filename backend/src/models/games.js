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

 const deleteGame = async(game)=>
 {
    const {company} = game
    const {id} = game
    const query = `DELETE from ${company} WHERE id =${id};`
    const [deleteGame] = await connection.execute(query)
 }
module.exports = {
    getAllGamesFromCompany,
    insertGame,
    deleteGame
}
