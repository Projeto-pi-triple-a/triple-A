const connection = require("./connection");

const getAllGamesFromCompany = async () => {
    try {
        console.log("cheguei no trycath da model");
        const [rows] = await connection.execute("SELECT * FROM microsoft");
        console.log("resultado da query no BD", rows);
        return rows;
    } catch (error) {
        console.log("erro ao fazer a consulta", error);
        throw error; // Rejeite o erro para que ele seja capturado no controlador
    }
}

module.exports = {
    getAllGamesFromCompany
}
