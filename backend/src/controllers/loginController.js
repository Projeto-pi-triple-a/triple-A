const { request } = require('express')
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
module.exports = 
{
    getLogin,
    insertLogin
}