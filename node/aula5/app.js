const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const le = require('./modules/ler')

/* const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Stephanie'}
]

const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json) */

async function leFile(caminho) {
    const dados = await le(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val))
}

leFile(caminhoArquivo)