
const btnSubmit = document.querySelector('#send')
btnSubmit.addEventListener('click', function () {
    SendGame(event);
})

async function SendGame (event)
{
    event.preventDefault();
    const gameName = document.querySelector('#gameName').value
    const descriptionGame = document.querySelector('#descriptionGame').value
    const linkVideo = document.querySelector('#linkVideo').value
    const priceGame = document.querySelector('#priceGame').value
    const dateGame = document.querySelector('#dateGame').value
    const company = document.querySelector('#company').value
    const game = 
    {
        company : company,
        id : companyId,
        gameName : gameName,
        descriptionGame : descriptionGame,
        linkVideo : linkVideo,
        oficialPrice : priceGame,
        oficialDate : dateGame
    }
    const response = await fetch('http://localhost:3000/games',
    {
        method : 'PUT',
        body : JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' }
    })
    alert("Game alterado com sucesso.")
}


var varLink = location.search.substring(1).split('&');
var companyIdLink = varLink[0].split('%27');//não me pergunte de onde veio esse %27.... ele só brotou mesmo
var companyLink = varLink[1].split('%27');
var companyId = companyIdLink[1]
var companyName = companyLink[1];
window.onload = async () => {
    const response = await fetch('http://localhost:3000/game/'+companyName+'/'+companyId)
    const game = await response.json()
    let {descriptionGame,gameName,linkVideo,oficialDate,oficialPrice}=game[0];
    oficialDate=oficialDate.substring(0, 10)
    


    let inputName = document.querySelector('#gameName')
    let inputDescription = document.querySelector('#descriptionGame')
    let inputVideo = document.querySelector('#linkVideo')
    let inputPrice = document.querySelector('#priceGame')
    let inputDate = document.querySelector('#dateGame')
    let selectCompany = document.querySelector('#company')
    inputName.value=gameName;
    inputDescription.value=descriptionGame;
    inputVideo.value=linkVideo;
    inputPrice.value=oficialPrice;
    inputDate.value=oficialDate;
    let companyToInput= companyName.charAt(0).toUpperCase()+companyName.slice(1)//tudo isso apra converter apenas a primeira letra em amiuscula para se encaixar nos apdroes do select la do html
    selectCompany.value=companyToInput;

}