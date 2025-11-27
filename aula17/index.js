// Introdução a objetos

/*const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome: 'Souza',
    age: 22
}

const pessoa2 = {
    nome: 'Nati',
    sobrenome: 'Bortoloto',
    age: 17
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.age)

function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Rodrigo', 'Souza', 22)
const pessoa2 = criaPessoa('Nati', 'Souza', 17)
const pessoa3 = criaPessoa('Junior', 'Leite', 29)
const pessoa4 = criaPessoa('Jean', 'Silva', 27)
const pessoa5 = criaPessoa('Mauricio', 'Cesar', 25)

console.log(pessoa1.idade, pessoa2.idade) */

const eu = {
    nome: 'Rodrigo',
    sobrenome: 'Souza',
    idade: 22,

    falar() {
        console.log(`Eu sou o ${this.nome} e tenho ${this.idade} anos de idade`)
    },

    incrementoIdade() {
        this.idade++
    }

}

eu.falar()
eu.incrementoIdade()
eu.falar()
