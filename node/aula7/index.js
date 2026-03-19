const voltaEstudo = 'volta'

for(let i = 0; i <= 10; i++) {
    console.log('Vou virar um programador')
}

class geraPessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falaOi() {
        console.log(`${this.nome} Oi`)
    }
}

const eu = new geraPessoa('Rodrigo', 'Souza')
eu.falaOi()