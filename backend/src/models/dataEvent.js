const connection = require("./connection")

const getEventFromCompany  = async(idComapany) =>
{
    console.log(idComapany)
  const query = 'select * from data_eventos where idCompany = ? order by id desc limit 1;'
   const [event]  = await connection.execute(query,[idComapany])
   return event 
}

const insertEvent = async (idComapany,formEvent) =>
{
    const {lastEvent,nextEvent} = formEvent
    console.log(idComapany)
    const query = 'insert into data_eventos values (null,?,?,?)'
    const [event] = await connection.execute(query,[idComapany,lastEvent,nextEvent]) // date format to body - YYYY-MM-DD
    return {insertId:event.insertId}
}

module.exports = 
{
    getEventFromCompany,
    insertEvent
}