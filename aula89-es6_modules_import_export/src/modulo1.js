const nome = 'pon'
const sobrenome = 'ton'
const idade = 23

const teste = 'Não exporta'


function soma(a, b) {
    return a + b
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

/* export default (c, d) => c * d */

export { nome, sobrenome, idade, soma}

