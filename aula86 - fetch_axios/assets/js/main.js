/* fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregaJsonNaPag(json))
 */
function carregaJsonNaPag(json) {
  const table = document.createElement('table')
  for(pessoa of json) {
    let tr = document.createElement('tr')

    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    tr.appendChild(td)

    let td2 = document.createElement('td')
    td2.innerHTML = pessoa.idade
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerHTML = pessoa.salario
    tr.appendChild(td3)

    table.appendChild(tr)
  }
  const res = document.querySelector('.resultado')
  res.appendChild(table)
}

carregaJsonNaPag()