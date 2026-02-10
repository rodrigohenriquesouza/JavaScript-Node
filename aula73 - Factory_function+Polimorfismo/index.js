function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} esta falando oi`)
        },

        treinando() {
            console.log(`${this.nome} ${this.sobrenome} esta treinando`)
        },

        indoEmbora() {
            console.log(`${this.nome} esta dizendo tchau`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const pessoa1 = criaPessoa('Rodrigo', 'Henrique')

pessoa1.treinando()
pessoa1.indoEmbora()
pessoa1.falar()