fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregaJsonNaPag(json))

function carregaJsonNaPag(json) {
  for(pessoa of json) {
    console.log(pessoa.nome)
  }
}

carregaJsonNaPag()