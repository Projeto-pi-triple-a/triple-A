var varLink = location.search.substring(1).split('?');
var valueLink = varLink[0].split('=');
var company = valueLink[1];
console.log(company)
/*
const fetchGames= async()=>{
  const response= await fetch('http://localhost:3000/games/'+company);
  console.log(response);
}
*/

window.onload = async () => {
  const response = await fetch('http://localhost:3000/games/'+company)
    const games = await response.json()
    
    let companyId;
    switch(company){//switch para pegar o id da empresa
      case "microsoft":
        companyId=1;
          break;

          case "sony":
            companyId=2;
          break;

          case "pc":
            companyId=3;
          break;

          case "nintendo":
            companyId=4;
          break;
    }
    const responseEvent = await fetch('http://localhost:3000/event/'+companyId)
    const event = await responseEvent.json()
    const {lastEvent,nextEvent} = event[0]
    let lastEventDate=lastEvent.substring(0, 10).split("-")//variavel que vai receber a data tendo apenas a data em si e depois divide em 3 partes(ano, mes e dia)
    let nextEventDate=nextEvent.substring(0, 10).split("-")
    let lastEventOfficial= lastEventDate[2]+"/"+lastEventDate[1]+"/"+lastEventDate[0]//variavel que recebe a data reajustada como dia mes e ano
    let nextEventOfficial= nextEventDate[2]+"/"+nextEventDate[1]+"/"+nextEventDate[0]
      let html= "";//criação da variavel que vai receber o html
      html+=`<div id="${company}">`//div que recebe o nome da empresa para alterar a cor de fundo
      switch(company){//switch para alterar a logo dependendo da empresa selecionada
        case "microsoft":
          html+=`<img src="../imgs/logoXbox.svg" id="logo" alt="Logo">`
          break;

          case "sony":
            html+=`<img src="../imgs/logoSony.svg" id="logo" alt="Logo">`
          break;

          case "pc":
            html+=`<img src="../imgs/logoWindows.svg" id="logo" alt="Logo">`
          break;

          case "nintendo":
            html+=`<img src="../imgs/logoNintendo.svg" id="logo" alt="Logo">`
          break;
      }//fim do switch das empresas
      html+=`</div>`;
      html+=`
      <div class="containerDates">
      <h2 class="dateTitle">Ultimo evento: </h2>
      <h2 class="dates">${lastEventOfficial}</h2>
      </div>
      <div class="containerDates">
      <h2 class="dateTitle">Próximo evento:</h2>
      <h2 class="dates">${nextEventOfficial}</h2>
      </div>
      <h1 id="exclusiveGamesTitle">Jogos exclusivos</h1>`;
      let containersCards= games.length/4;//Cálculo para ver quantos containers vou precisar(são feitos em grupos de até 4)
      let cardGamesCount=0;//variavel para ir contando quantos cards foram concluidos(ja que tem que ir de 4 em 4)
      for (let i = 0; i < containersCards; i++) {//for para construir os containers dos cards
        html+=`<div class="containerCardGames">`;
       let count=0;//contador que vai verificar quando chegar em 4 cards dentro do container e reseta por cada container
        do {
          const {descriptionGame,gameName,linkVideo,oficialDate,oficialPrice,plataformMicrosoft,plataformSony,plataformNintendo,plataformPc} = games[cardGamesCount]
          let dateParts=oficialDate.substring(0, 10).split("-")//variavel que vai pegar apenas a data e dividir em ano mes e dia
    let date= dateParts[2]+"/"+dateParts[1]+"/"+dateParts[0]//variavel que vai reajustar e adaptar o dia, mes e ano
          html+=`
          <div class="cardGames">
        <h3 class="nameGame">${gameName}</h3>
        <iframe class="gameplay" src="https://www.youtube.com/embed/${linkVideo}" frameborder="0"></iframe>
        <h3 class="price">R$${oficialPrice}</h3>
        <h1 class="date">${date}</h1>
        <p class="description">${descriptionGame}</p>`
        if(plataformMicrosoft==true || plataformNintendo==true || plataformPc==true || plataformSony==true){
          html+=`<p>Disponivel em: </p>
          <div class="containerNE">`
        if(plataformPc==true){
          html+=`<div id="pc" class="icon">
          <img src="../imgs/logoWindows.svg" alt="Logo">
          </div>`
        }
        if(plataformSony==true){
          html+=`<div id="sony" class="icon">
          <img src="../imgs/logoSony.svg" alt="Logo">
          </div>`
        }
        if(plataformMicrosoft==true){
          html+=`<div id="microsoft" class="icon">
          <img src="../imgs/logoXbox.svg" alt="Logo">
          </div>`
        }
        if(plataformNintendo==true){
          html+=`<div id="nintendo" class="icon">
          <img src="../imgs/logoNintendo.svg" alt="Logo">
          </div>`
        }
          html+=`</div>`;//fechamaneto do cointaner de jogos não exclusivos
        }
        
        html+=`</div>`;//fechamento do card
          
          count++;
          cardGamesCount++;
        } while (count<4 && cardGamesCount<games.length);//fim do while

        html+=`</div>`
      }



      var body = document.querySelector("body");
      body.innerHTML = html;
      return games
     
    }
