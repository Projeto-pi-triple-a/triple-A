const btnConfirm = document.querySelector('#confirm')
btnConfirm.addEventListener('click', function () {
    login(event)
})

async function login(event) {
    event.preventDefault()
    const inputLogin = document.querySelector('#login').value
    const inputPassword = document.querySelector('#password').value
    const login = { email: inputLogin,password: inputPassword}
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    if(data.error)
    {
        const p = document.querySelector('#response')
        var html = data.error
        p.innerHTML = html
    }
    else
    {
        sessionStorage.setItem('id',data[0].id)
        sessionStorage.setItem('email',data[0].email)
        sessionStorage.setItem('nome',data[0].nome)
        window.location.href=("../../index.html")
    }
    console.log(data);
  }