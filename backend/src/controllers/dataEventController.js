const dataEventModel = require('../models/dataEvent')

const getEventData = async (request,response) => 
{
    const idCompany = request.params.idCompany
     const getEvent = await dataEventModel.getEventFromCompany(idCompany)
     return response.status(200).json(getEvent)
}

module.exports = 
{
    getEventData
}