class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    set nomeCompleto(nome) {
        nome = nome.split(' ')
        this.nome = nome.shift()
        this.sobrenome = nome.join(' ')
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }

}

const p1 = new Pessoa('Rodrigo', 'Souza')
const p2 = new Pessoa('Natlia', 'Oliveira')
p1.nomeCompleto = 'Rodrigo Henrique Souza'
p2.nomeCompleto = 'Natailia Oliveira Souza'



