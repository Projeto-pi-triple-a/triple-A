const connection = require("./connection")

const getAllGamesFromCompany = async (companyName) => {
    const querySelectGamesFromCompany = `SELECT * FROM ${companyName}`;
    const querySelectGamesNotExclusiveFromCompany = `SELECT * FROM game_not_exclusive WHERE plataform${companyName} = true`;
  
    const [exclusiveGames] = await connection.execute(querySelectGamesFromCompany);
    const [notExclusiveGames] = await connection.execute(querySelectGamesNotExclusiveFromCompany);
  
    const games = [...exclusiveGames, ...notExclusiveGames];
  
    return games;
  };
  
const insertGame = async(game) =>
{
    const {company} = game 
    const {gameName} = game
    const {descriptionGame} = game
    const {linkVideo} = game
    const {oficialPrice} = game
    const {oficialDate} = game

    const query = `INSERT INTO ${company} VALUES (null,'${gameName}','${descriptionGame}','${linkVideo}',${oficialPrice},'${oficialDate}');`
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
 const updateGame = async(game)=>
 {
    const {company} = game
    const {id} = game
    const {gameName} = game
    const {descriptionGame} = game
    const {linkVideo} = game
    const {oficialPrice} = game
    const {oficialDate} = game

    const query = `UPDATE ${company} SET gameName = '${gameName}', descriptionGame = '${descriptionGame}', linkVideo = '${linkVideo}', oficialPrice = ${oficialPrice}, oficialDate = '${oficialDate}' WHERE ID = ${id}`;
    const [updateGame] = await connection.execute(query)
}
module.exports = {
    getAllGamesFromCompany,
    insertGame,
    deleteGame,
    updateGame
}
