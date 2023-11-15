function idToCompany(id) {
    let company;
    switch (id) {
        case "1":
            company="pc"
            break;
        case "2":
            company="sony"
            break;
        case "3":
            company="microsoft"
            break;
        case "4":
            company="nintendo"
            break;
    }
    return company;
}


async function htmlBuilder(companyId) {
    let company=idToCompany(companyId);
    const response = await fetch('http://localhost:3000/games/'+company)
    const games = await response.json()

    
    let html="";
    html+=`<header class="mainHeader">
    <nav class="menu">
        <a class="menuLink" href="#">Home</a>
        <a class="menuLink" href="login.html">Login</a>
    </nav>
</header>`;
let doda;//variavel apenas para deixar definir se vem do ou da antes da empresa
if(company=="pc"){doda= "do"}//if para dar valor ao doda
else {doda="da"}
html+=`<h1 id="title">Jogos ${doda} ${company}</h1>`;
html+=`<select id="selectedCompany">`;
if(company=="pc"){html+=`<option selected value="1">Pc</option>`;} else{html+=`<option value="1">Pc</option>`;}
if(company=="sony"){html+=`<option selected value="2">Sony</option>`;} else{html+=`<option value="2">Sony</option>`;}
if(company=="microsoft"){html+=`<option selected value="3">Microsoft</option>`;} else{html+=`<option value="3">Microsoft</option>`;}
if(company=="nintendo"){html+=`<option selected value="4">Nintendo</option>`;} else{html+=`<option value="4">Nintendo</option>`;}
html+=`</select>`;
if(games!=null){
let containersCards= games.length/4;//Cálculo para ver quantos containers vou precisar(são feitos em grupos de até 4)
let cardGamesCount=0;//variavel para ir contando quantos cards foram concluidos(ja que tem que ir de 4 em 4)
for (let i = 0; i < containersCards; i++) {//for para construir os containers dos cards
    html+=`<div class="containerCardGames">`;
   let count=0;//contador que vai verificar quando chegar em 4 cards dentro do container e reseta por cada container
    do {
      const {idGameNE, id,descriptionGame,gameName,linkVideo,oficialDate,oficialPrice,plataformMicrosoft,plataformSony,plataformNintendo,plataformPc} = games[cardGamesCount]
      let dateParts=oficialDate.substring(0, 10).split("-")//variavel que vai pegar apenas a data e dividir em ano mes e dia
let date= dateParts[2]+"/"+dateParts[1]+"/"+dateParts[0]//variavel que vai reajustar e adaptar o dia, mes e ano
      html+=`<div class="cardGames">`
      html+=`
      <h1>${gameName}</h1>
    <iframe class="gameplay" src="https://www.youtube.com/embed/${linkVideo}" frameborder="0"></iframe>
    <h3 class="price"> Preço oficial: R$${oficialPrice}</h3>
    <h3 class="date">Data de lançamento ${date}</h3>
    <p class="description">${descriptionGame}</p>
    <div class="containerIcons">`
    if(plataformMicrosoft==true || plataformNintendo==true || plataformPc==true || plataformSony==true){//jogo não exlcusivo
    html+=`<a href="./formEditNotExclusiveGames.html?id='${idGameNE}'" class="nameGame"><button class="material-symbols-outlined icon">edit</button></a>
    <button class="material-symbols-outlined icon deleteGameNE" value="${idGameNE}">Delete</button>`
    }//jogo não exclusivo
    else{//jogo exclusivo
      html+=`<a href="./formEditExclusiveGames.html?id='${id}'&company='${company}'" class="nameGame"><button class="material-symbols-outlined icon">edit</button></a>
      <button class="material-symbols-outlined icon deleteGameE" value="${id}">Delete</button>`
    }//jogo exclusivo
    html+=`</div>`//fechamento container icons
    
    html+=`</div>`;//fechamento do card
      
      count++;
      cardGamesCount++;
    } while (count<4 && cardGamesCount<games.length);//fim do while

    html+=`</div>`
  }
}
else{
    html+=`<h1>Nenhum jogo cadastrado nesta empresa</h1>`
}

    
    var body = document.querySelector("body");
      body.innerHTML = html;
      //--------Ações que devem ser recriadas para para reconstrução da página.
      let select= document.getElementById("selectedCompany");//aqui eu crio/recrio o evento de change Para atualizar ele com o novo select que foi criado
select.addEventListener("change", function() {
    htmlBuilder(select.value)
  });
//----
  let deleteExclusiveGame= document.getElementsByClassName("deleteGameE");//aqui para a ação de apagar jogos exclusivos
  for (let i = 0; i < deleteExclusiveGame.length; i++) {
deleteExclusiveGame[i].addEventListener("click",async function(buttonSelected) {
    buttonSelected= buttonSelected.target;
    var confirmDelete = confirm("Deseja realmente apagar este jogo?");
    if(confirmDelete==true){
        const game = 
    {
        company : company,
        id : buttonSelected.value
    }
    console.log(game)
        const responseDelete = await fetch('http://localhost:3000/games/',
        {
        method : 'DELETE',
        body : JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' }
    })
    alert("Jogo apagado com sucesso")
    htmlBuilder(select.value);

    }
    else{
        alert("Jogo mantido no sistema.");
    }
  });
}//fim do deletar jogo exclusivo
//----
let deleteNotExclusiveGame= document.getElementsByClassName("deleteGameNE");//aqui para a ação de apagar jogos NÃO exclusivos
for (let i = 0; i < deleteNotExclusiveGame.length; i++) {
deleteNotExclusiveGame[i].addEventListener("click",async function(buttonSelected) {
  buttonSelected= buttonSelected.target;
  var confirmDelete = confirm("Deseja realmente apagar este jogo?");
  if(confirmDelete==true){
      const game = 
  {
      id : buttonSelected.value
  }
  console.log(game)
      const responseDelete = await fetch('http://localhost:3000/gamesNotExclusive',
      {
      method : 'DELETE',
      body : JSON.stringify(game),
      headers: { 'Content-Type': 'application/json' }
  })
  alert("Jogo apagado com sucesso")
  htmlBuilder(select.value);

  }
  else{
      alert("Jogo mantido no sistema.");
  }
});
}//fim do deletar jogo NÃO exclusivo

  //---------Fim das ações que devem ser recriadas
      return games
}

window.onload = async () => {
    htmlBuilder("1");
}