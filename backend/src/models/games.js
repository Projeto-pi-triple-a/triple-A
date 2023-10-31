const connection = require("./connection");

const getAllGamesFromCompany = async (companyName) => {
        const query = `SELECT * from ${companyName};`
        const [games] = await connection.execute(query);
        return games
}
const insertGame = async(company,gameName,descriptionGame,linkVideo,oficalPrice,oficialDate) =>
{
    const query = `INSERT INTO ${company} VALUES (null,${gameName},${descriptionGame},${linkVideo},${oficalPrice},${oficialDate});`
    const [insertGame] = await connection.execute(query)
    return {insertedGame: insertGame.insertedGame}
}
module.exports = {
    getAllGamesFromCompany
}
