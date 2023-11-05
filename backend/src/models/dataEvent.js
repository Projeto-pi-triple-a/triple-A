const connection = require("./connection")

const getEventFromCompany  = async(idComapany) =>
{
    console.log(idComapany)
  const query = 'select * from data_eventos where idCompany = ? order by id desc limit 1;'
   const [event]  = await connection.execute(query,[idComapany])
   return event 
}

module.exports = 
{
    getEventFromCompany
}