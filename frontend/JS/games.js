var varLink = location.search.substring(1).split('&');
var valueLink = varLink[0].split('=');
var company = valueLink[1];
console.log(company)
window.onload = () => {
  fetch('/games/' + company)
    .then((response) => {
      return response.json();
    })
    .then((games) => {
      // Iniciar construção do html
      console.log(company)
    })
    .catch((err) => {
      console.log('Erro ao buscar os dados dos jogos');
    });
};
