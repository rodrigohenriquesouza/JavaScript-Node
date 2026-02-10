const metodoFalar = {
    falar() {
        console.log(`${this.nome} esta falando sobre factory functions`)
    }   
}

const metodoHaha = {
    rindo() {
        console.log(`${this.nome} esta dando risada`)
    }
}


const metodoAlmocar = {
    almocando() {
        console.log(`${this.nome} ${this.sobrenome} esta almoçando`)
    }
}

const pessoaPrototype = Object.assign({}, metodoFalar, metodoHaha, metodoAlmocar )

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}


const pessoa1 = criaPessoa('Rodrigo', 'Henrique')
pessoa1.rindo()
pessoa1.almocando()
pessoa1.falar()