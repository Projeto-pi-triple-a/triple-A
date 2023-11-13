window.onload =  () => 
{
    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')
    nome.innerHTML = 'NOME: '+sessionStorage.getItem('nome')
    email.innerHTML = 'EMAIL: '+sessionStorage.getItem('email')
    console.log(nome)
    console.log(email)
}