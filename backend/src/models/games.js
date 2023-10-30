const connection = require("./connection");

const getAllGamesFromCompany = async (companyName) => {
    try {
        const query = `SELECT * from ${companyName};`
        const [games] = await connection.execute(query);
        return games
    } catch (error) {
        console.log("erro ao fazer a consulta", error);
        throw error
    }
}
const insertGame = async() =>
{
 try {
    const query = `INSERT INTO `
 } catch (error) {
    console.log(`erro ao inserir jogo ${error}`)
 }
}
module.exports = {
    getAllGamesFromCompany
}
