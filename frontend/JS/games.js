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
    const {descriptionGame,gameName,id,oficialDate} = games[0]
      console.log(descriptionGame)
      console.log(gameName)
      console.log(id)
      console.log(oficialDate.toUTCString())
      return games
     
    }
