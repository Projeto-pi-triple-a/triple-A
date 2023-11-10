const { request, response } = require('express')
const dataEventModel = require('../models/dataEvent')

const getEventData = async (request,response) => 
{
    const idCompany = request.params.idCompany
     const getEvent = await dataEventModel.getEventFromCompany(idCompany)
     return response.status(200).json(getEvent)
}
const insertEvent = async (request,response) =>
{
    const idCompany = request.params.idCompany
    const getFormEvent = await dataEventModel.insertEvent(idCompany,request.body)
    return response.status(201).json(getFormEvent)
}
module.exports = 
{
    getEventData,
    insertEvent
}