const { json } = require("express")
const connection = require("./connection")


 const getLogin = async (formlogin) =>
 {
    const {email} = formlogin
    const {password} = formlogin
    const query = 'SELECT * FROM login WHERE EMAIL = ? AND SENHA = ?; '
    const dataLogin = [email,password]
    const [login] = await connection.execute (query,dataLogin)
    if(login.length == 1)
    {
        return login
    }
    else
    {
        return { error: 'email ou senha incorretos' }
    }
 }

 const insertLogin = async (formLogin) =>
 {
    const {nome,email,password} = formLogin
    const query = 'INSERT INTO LOGIN VALUES(NULL,?,?,?);'
    const dataLogin =[nome,email,password]
    const [login] = await connection.execute(query,dataLogin)
    return {insertId:login.insertId}
 }

 const deleteLogin = async (id) =>
 {
    const query = 'DELETE FROM LOGIN WHERE ID = ?;'
    const login = await connection.execute(query,[id])
 }

 const updateLogin = async (formLogin) =>
 {
    const {nome,email,password,id} = formLogin
    const query = 'UPDATE LOGIN SET NOME = ? , EMAIL = ? , SENHA = ?  WHERE ID = ?;'
    const dataLogin =[nome,email,password,id]
    const [login] = await connection.execute(query,dataLogin)
 }

 module.exports = 
 {
    getLogin,
    insertLogin,
    deleteLogin,
    updateLogin
 }