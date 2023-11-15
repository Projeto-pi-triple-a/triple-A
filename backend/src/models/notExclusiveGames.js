const connection = require("./connection")

const getGamefromId = async (id) =>
  {
    const query = `SELECT * FROM game_not_exclusive WHERE idGameNE = ${id}`
    const [game] = await connection.execute(query)
    return game
  }


const insertGame = async (game) => {   
    const { gameName, descriptionGame, linkVideo, oficialPrice, oficialDate, plataformMicrosoft, plataformSony, plataformNintendo, plataformPc } = game;

    const query = `INSERT INTO game_not_exclusive (gameName, descriptionGame, linkVideo, oficialPrice, oficialDate, plataformMicrosoft, plataformSony, plataformNintendo, plataformPc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const [insertGame] = await connection.execute(query, [gameName, descriptionGame, linkVideo, oficialPrice, oficialDate, plataformMicrosoft, plataformSony, plataformNintendo, plataformPc]);
    
    return { insertId: insertGame.insertId };
}


 const deleteGame = async(game)=>
 {
    const {id} = game
    const query = `DELETE from game_not_exclusive WHERE idGameNE =${id};`
    const [deleteGame] = await connection.execute(query)
 }
 const updateGame = async(game)=>
 {
    const {id} = game
    const {gameName} = game
    const {descriptionGame} = game
    const {linkVideo} = game
    const {oficialPrice} = game
    const {oficialDate} = game
    const {plataformMicrosoft} = game
    const {plataformSony} = game
    const {plataformNintendo} = game
    const {plataformPc} = game

    const query = `UPDATE game_not_exclusive SET gameName = '${gameName}', descriptionGame = '${descriptionGame}', linkVideo = '${linkVideo}', oficialPrice = ${oficialPrice}, oficialDate = '${oficialDate}',plataformMicrosoft = '${plataformMicrosoft}', plataformSony = '${plataformSony}', plataformNintendo = '${plataformNintendo}', plataformPc = '${plataformPc}'  WHERE idGameNE = ${id}`;
    const [updateGame] = await connection.execute(query)
}
module.exports = {
    insertGame,
    deleteGame,
    updateGame,
    getGamefromId
}
