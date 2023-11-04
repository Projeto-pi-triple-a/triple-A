const connection = require("./connection")

const insertGame = async (game) => {   
    const { gameName, descriptionGame, linkVideo, oficialPrice, oficialDate, plataformMicrosoft, plataformSony, plataformNintendo, plataformPc } = game;

    const query = `INSERT INTO game_not_exclusive (gameName, descriptionGame, linkVideo, oficialPrice, oficialDate, plataformMicrosoft, plataformSony, plataformNintendo, plataformPc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const [insertGame] = await connection.execute(query, [gameName, descriptionGame, linkVideo, oficialPrice, oficialDate, plataformMicrosoft, plataformSony, plataformNintendo, plataformPc]);
    
    return { insertId: insertGame.insertId };
}


 const deleteGame = async(game)=>
 {
    const {id} = game
    const query = `DELETE from game_not_exclusive WHERE id =${id};`
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
    const {plataoformMicrosoft} = game
    const {plataoformSony} = game
    const {plataoformNintendo} = game
    const {plataoformPc} = game

    const query = `UPDATE game_not_exclusive SET gameName = '${gameName}', descriptionGame = '${descriptionGame}', linkVideo = '${linkVideo}', oficialPrice = ${oficialPrice}, oficialDate = '${oficialDate}',plataformMicrosoft = '${plataoformMicrosoft}', plataformSony = '${plataoformSony}', plataformNintendo = '${plataoformNintendo}', plataformPc = '${plataoformPc}'  WHERE id = ${id}`;
    const [updateGame] = await connection.execute(query)
}
module.exports = {
    insertGame,
    deleteGame,
    updateGame
}
