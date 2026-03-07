const path = require('path')
const caminho = path.resolve(__dirname, 'praticandoNode.json')
const escreveArquivo = require('./modules/escreverPratica')

const dadosPessoas = [
    {nome: 'Julia'},
    {nome: 'Rodrigo'},
    {nome: 'Natalia'},
    {nome: 'Datan'}
]

const json = JSON.stringify(dadosPessoas, '', 2)

escreveArquivo(caminho, json)