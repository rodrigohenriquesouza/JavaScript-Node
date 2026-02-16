fetch('pessoas.json')
then(resposta => resposta.json())
then(json => carregaJsonNaPag(json))

function carregaJsonNaPag(json) {
  const div = document.querySelector('.resultado')
  div.innerHTML = json
}

carregaJsonNaPag()