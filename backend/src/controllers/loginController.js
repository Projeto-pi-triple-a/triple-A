const { request, response } = require('express')
const loginModel = require('../models/login')

const getLogin = async(request,response) =>
{
    const validateLogin = await loginModel.getLogin(request.body)
    return response.status(200).json(validateLogin)
}

const insertLogin = async (request,response)=>
{
    const formLogin = await loginModel.insertLogin(request.body)
    return response.status(201).json(formLogin)
}

const deleteLogin = async (request,response) =>
{
    const id = request.params.id
    const formLogin = await loginModel.deleteLogin(id)
    return response.status(204).json()
}
const updateLogin = async (request,response) =>
{
    const formLogin = await loginModel.updateLogin(request.body)
    return response.status(204).json()
}
module.exports = 
{
    getLogin,
    insertLogin,
    deleteLogin,
    updateLogin
}