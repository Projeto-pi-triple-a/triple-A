

const btnSubmit = document.querySelector('#send')
btnSubmit.addEventListener('click', function () {
    SendGame(event);
})

async function SendGame (event)
{
    event.preventDefault();
   
    const microsoft = document.querySelector('#microsoft').checked ? 1 : 0;
    const sony = document.querySelector('#sony').checked ? 1 : 0;
    const nintendo = document.querySelector('#nintendo').checked ? 1 : 0;
    const pc = document.querySelector('#pc').checked ? 1 : 0;
    const gameName = document.querySelector('#gameName').value
    const descriptionGame = document.querySelector('#descriptionGame').value
    const linkVideo = document.querySelector('#linkVideo').value
    const priceGame = document.querySelector('#priceGame').value
    const dateGame = document.querySelector('#dateGame').value
    const game = 
    {
        gameName : gameName,
        descriptionGame : descriptionGame,
        linkVideo : linkVideo,
        oficialPrice : priceGame,
        oficialDate : dateGame,
        plataformMicrosoft :microsoft,
        plataformSony :sony,
        plataformNintendo :nintendo,
        plataformPc:pc
    }
    console.log(game)
    const response = await fetch('http://localhost:3000/gamesNotExclusive',
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
        data.insertId;
        alert(`Game ID ${data.insertId} inserido com sucesso`);
        document.querySelector('#microsoft').checked = false;
        document.querySelector('#sony').checked = false;
        document.querySelector('#nintendo').checked = false;
        document.querySelector('#pc').checked = false;
        document.querySelector('#gameName').value = "";
        document.querySelector('#descriptionGame').value = "";
        document.querySelector('#linkVideo').value = "";
        document.querySelector('#priceGame').value = "";
        document.querySelector('#dateGame').value = "";
        
    
    }
}