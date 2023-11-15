

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
        id : companyId,
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
        method : 'PUT',
        body : JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' }
    });
    alert("Game alterado com sucesso.")
}

var varLink = location.search.substring(1);
var idLink = varLink.split('%27');//não me pergunte de onde veio esse %27.... ele só brotou mesmo
var companyId = idLink[1]

window.onload = async () => {
    const response = await fetch('http://localhost:3000/gamesNotExclusive/'+companyId)
    const game = await response.json()
    let {descriptionGame,gameName,linkVideo,oficialDate,oficialPrice,plataformMicrosoft,plataformSony,plataformNintendo,plataformPc}=game[0];
    oficialDate=oficialDate.substring(0, 10)
    


    let inputName = document.querySelector('#gameName')
    let inputDescription = document.querySelector('#descriptionGame')
    let inputVideo = document.querySelector('#linkVideo')
    let inputPrice = document.querySelector('#priceGame')
    let inputDate = document.querySelector('#dateGame')
    let checkMicrosoft = document.querySelector('#microsoft')
    let checkSony = document.querySelector('#sony')
    let checkNintendo = document.querySelector('#nintendo')
    let checkPc = document.querySelector('#pc')
    inputName.value=gameName;
    inputDescription.value=descriptionGame;
    inputVideo.value=linkVideo;
    inputPrice.value=oficialPrice;
    inputDate.value=oficialDate;
    checkMicrosoft.checked=plataformMicrosoft;
    checkSony.checked=plataformSony;
    checkNintendo.checked=plataformNintendo;
    checkPc.checked=plataformPc;

}