const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Stephanie'}
]

const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json)