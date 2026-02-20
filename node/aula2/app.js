const dog = require('./mod1')
const path = require('path')
console.log(__dirname)
console.log(path.resolve(__dirname, '.', '.', 'imagens', 'teste'))

const barney = new dog('Barney')
barney.latir()

