
const btnSubmit = document.querySelector('#send')
btnSubmit.addEventListener('click', function () {
    SendGame(event)
})

async function SendGame (event)
{
    event.preventDefault()
    const gameName = document.querySelector('#gameName').value
    const descriptionGame = document.querySelector('#descriptionGame').value
    const linkVideo = document.querySelector('#linkVideo').value
    const priceGame = document.querySelector('#priceGame').value
    const dateGame = document.querySelector('#dateGame').value
    const company = document.querySelector('#company').value
    const game = 
    {
        company : company,
        gameName : gameName,
        descriptionGame : descriptionGame,
        linkVideo : linkVideo,
        oficialPrice : priceGame,
        oficialDate : dateGame
    }
    const response = await fetch('http://localhost:3000/games',
    {
        method : 'POST',
        body : JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    if(data.error)
    {
        console.log(data.error)
    }
    else
    {
        data.insertId
        alert(`game ID ${data.insertId} inserido com sucesso na plataforma ${company}`)
        document.querySelector('#gameName').value = ""
        document.querySelector('#descriptionGame').value = ""
        document.querySelector('#linkVideo').value = ""
        document.querySelector('#priceGame').value = ""
        document.querySelector('#dateGame').value = ""
    }
}