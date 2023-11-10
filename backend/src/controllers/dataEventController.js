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
const updateEvent = async (request,response) =>
{
    const id = request.params.id
    const updateEvent = await dataEventModel.updateEvent(id,request.body)
    return response.status(201).json(updateEvent)
}
module.exports = 
{
    getEventData,
    insertEvent,
    updateEvent
}