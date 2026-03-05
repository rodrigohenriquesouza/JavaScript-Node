const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Stephanie'}
]

const json = JSON.stringify(pessoas, '', 2)

fs.writeFile(caminhoArquivo, json, { flag: 'w', encoding: 'utf8'})