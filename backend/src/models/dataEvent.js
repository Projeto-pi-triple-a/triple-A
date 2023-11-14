const { query } = require("./connection")
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
    console.log("model "+idComapany)
    console.log("model "+lastEvent)
    console.log("model "+nextEvent)
    const query = 'INSERT INTO DATA_EVENTOS (idCompany, lastEvent, nextEvent) VALUES (?, ?, ?)';
    const [event] = await connection.execute(query,[idComapany,lastEvent,nextEvent]) // date format to body - YYYY-MM-DD
    return {insertId:event.insertId}
}
 const deleteEvent = async (id) =>
 {
     console.log(id)
      const query = 'DELETE FROM DATA_EVENTOS WHERE id = ?'
     const event = await connection.execute(query,[id])
 }
 const updateEvent = async (id,formEvent) =>
 {
     const {lastEvent,nextEvent} = formEvent
     console.log(id)
     const query = 'UPDATE DATA_EVENTOS SET lastEvent = ? , nextEvent = ? where id = ? '
     const [event] = await connection.execute(query,[lastEvent,nextEvent,id])
 }

module.exports = 
{
    getEventFromCompany,
    insertEvent,
    deleteEvent,
    updateEvent
}