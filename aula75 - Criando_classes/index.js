class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} esta bebendo`)
    }
}

const p1 = new Pessoa('Rodrigo', 'Souza')
console.log(p1.beber())