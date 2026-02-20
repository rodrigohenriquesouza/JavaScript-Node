class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}


const nome = 'Rodrigo'
const idade = 23
const sobrenome = 'Souza'
const hobby = 'Jogos'

module.exports = {
    nome, idade, sobrenome, hobby, Pessoa
}

exports.Pessoa = Pessoa



/* const nome = 'Rodrigo'
const sobrenome = 'Souza'

const falaNome = () => nome + ' ' + sobrenome


module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome 

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome */