const getIndex = (request,response) =>
{
const index= "../index.html";
return response.sendfile(index, { root: __dirname })
} // end const getAllGames controller

module.exports = 
{
    getIndex
}